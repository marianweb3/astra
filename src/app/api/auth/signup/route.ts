import { NextResponse } from 'next/server';
import User from '@/models/user';
import Wallet from '@/models/wallet';
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";
import { createAddress } from '@/wallets/westwallet';

export async function POST(request: Request) {

    const { email, password } = await request.json();

    if (!password || password.length < 6) return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });

    try {
        
        await connectDB();
        const userFound = await User.findOne({ email });

        if (userFound) return NextResponse.json({ message: 'Email already exists' }, { status: 400 });

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({ email, password: hashedPassword });

        const savedUser = await user.save();
       
        const usdcerc = await createAddress(email);

        const wallet = new Wallet({ user:  savedUser._id, address: usdcerc.address, name: "Tether", network: "erc" });

        await wallet.save();

        return NextResponse.json({
            _id: savedUser._id,
            email: savedUser.email,
            fullname: savedUser.fullname,
        });
    } catch (error) {

        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 400,
                }
            );
        }
    }
}