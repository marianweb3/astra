import { NextResponse } from "next/server";

export async function GET() {

    const balance = await getBalance("0xFF8AF0265130225F405eFeC650bCc8E217bBE7a3");
    return NextResponse.json({ balance: balance });

}