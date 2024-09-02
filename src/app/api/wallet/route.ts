import { NextResponse } from "next/server";
import { getBalance, createAddress } from "../../../wallets/westwallet";

export async function GET() {

    const balance = await getBalance();
    return NextResponse.json({ balance: balance });

}