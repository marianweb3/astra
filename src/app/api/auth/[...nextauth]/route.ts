import NextAuth from 'next-auth'
import credentialsProvider from 'next-auth/providers/credentials'
import {
  type SIWESession,
  verifySignature,
  getChainIdFromMessage,
  getAddressFromMessage
} from '@web3modal/siwe';
import Wallet from '@/models/wallet';
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";
import { createAddress } from '@/wallets/westwallet';

declare module 'next-auth' {
  interface Session extends SIWESession {
    address: string
    chainId: number
  }
}

const nextAuthSecret = process.env.NEXTAUTH_SECRET
if (!nextAuthSecret) {
  throw new Error('NEXTAUTH_SECRET is not set')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) {
  throw new Error('NEXT_PUBLIC_PROJECT_ID is not set')
}

const providers = [
  credentialsProvider({
    name: 'Ethereum',
    credentials: {
      message: {
        label: 'Message',
        type: 'text',
        placeholder: '0x0'
      },
      signature: {
        label: 'Signature',
        type: 'text',
        placeholder: '0x0'
      }
    },
    async authorize(credentials) {

      try {
        if (!credentials?.message) {
          throw new Error('SiweMessage is undefined')
        }
        const { message, signature } = credentials
        const address = getAddressFromMessage(message)
        const chainId = getChainIdFromMessage(message)

        const isValid = await verifySignature({ address, message, signature, chainId, projectId })

        if (isValid) {

          await connectDB();

          const walletFound = await Wallet.findOne({ user: address });

          if(!walletFound){

            const usdcerc = await createAddress(address);

            const wallet = new Wallet({ user:  address, address: usdcerc.address, name: "Tether", network: "erc" });
    
            await wallet.save();

          }

          return {
            id: `${chainId}:${address}`
          }
        }

        return null
      } catch (e) {
        return null
      }
    }
  })
]

const handler = NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  secret: nextAuthSecret,
  providers,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    session({ session, token }) {
      if (!token.sub) {
        return session
      }

      const [, chainId, address] = token.sub.split(':')
      if (chainId && address) {
        session.address = address
        session.chainId = parseInt(chainId, 10)
      }

      return session
    }
  }
})

export { handler as GET, handler as POST }

// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth"
// import { connectDB } from "@/libs/mongodb";
// import User from "@/models/user";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password", placeholder: "********" }
//             },
//             async authorize(credentials, req) {
//                 await connectDB();

//                 const userFound = await User.findOne({ email: credentials.email }).select("+password");
//                 if (!userFound) throw new Error("Invalid credentials");

//                 const passwordMatch = await bcrypt.compare(credentials.password, userFound.password);
//                 if (!passwordMatch) throw new Error("Invalid credentials");

//                 return userFound;
//             },
//         }),
//     ],
//     callbacks: {
//         jwt({account, token, user, profile, session}) {
//             if (user) token.user = user;
//             return token;
//         },
//         session({session, token}) {
//             session.user = token.user as any;
//             return session;
//         }
//     },
//     secret:process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: "/login",
//     },
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }