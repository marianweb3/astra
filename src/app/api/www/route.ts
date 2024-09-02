import { NextResponse } from "next/server";
import Transaction from '@/models/transaction';
import { connectDB } from "@/libs/mongodb";
import requestIp from 'request-ip'

export async function POST(request: Request) {

    // const detectedIp = requestIp.getClientIp(request);
    // console.log(detectedIp)

    // if(detectedIp != "5.189.219.250"){
    //     return NextResponse.json({ message: 'Not allowed' }, { status: 403 });
    // }

    try {

        const data = await request.formData();
        const amount = data.get('amount');
        const address = data.get('address');
        const hash = data.get('blockchain_hash');

        await connectDB();

        const transactionFound = await Transaction.findOne({ hash });

        if (transactionFound) return NextResponse.json({ message: 'Already known' }, { status: 400 });

        const transction = new Transaction({ amount, address, hash });
        await transction.save();

        return NextResponse.json({ message: "Ok" });

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