import { getCsrfToken, signIn, signOut, getSession } from 'next-auth/react'
import type { SIWEVerifyMessageArgs, SIWECreateMessageArgs, SIWESession } from '@web3modal/siwe'
import { createSIWEConfig, formatMessage } from '@web3modal/siwe'
import { mainnet, sepolia } from 'viem/chains'
import { redirect } from 'next/navigation'

export const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: typeof window !== 'undefined' ? window.location.host : '',
    uri: typeof window !== 'undefined' ? window.location.origin : '',
    chains: [mainnet.id, sepolia.id],
    statement: 'Please sign with your account'
  }),
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) => formatMessage(args, address),
  getNonce: async () => {
    const nonce = await getCsrfToken()
    if (!nonce) {
      throw new Error('Failed to get nonce!')
    }

    return nonce
  },
  getSession: async () => {
    const session = await getSession()
    if (!session) {
      throw new Error('Failed to get session!')
    }

    const { address, chainId } = session as unknown as SIWESession

    return { address, chainId }
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const success = await signIn('credentials', {
        message,
        redirect: false,
        signature,
        callbackUrl: '/deposit'
      })
      return Boolean(success?.ok)
    } catch (error) {
      return false
    }
  },
  onSignIn: (session?: SIWESession) => {
    console.log(session)
    window.location.href = "/deposit";
  },
  signOut: async () => {
    try {
      await signOut({
        redirect: false
      })

      return true
    } catch (error) {
      return false
    }
  }
})