import { NextResponse } from "next/server";
import Card from '@/models/card';
import { connectDB } from "@/libs/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { createCard } from "@/wallets/checkbook";


export async function POST(request: Request, response: Response) {

    const session = await getServerSession(authOptions)
    if (session) {

        const user = session.user._id;
        const data = await request.formData();
        const city = data.get('city');
        const country = data.get('country');
        const address = data.get('address');
        const zip = data.get('zip');
        const phone = data.get('phone');
        const email = data.get('email');

        const cardData = await createCard(city, country, address, zip, phone, email);

        await connectDB();


        const card = new Card({ user: user, number: cardData.card_number, cvv: cardData.cvv, expiration: cardData.expiration_date, id: cardData.id });
        await card.save();

        return NextResponse.json({ message: "Ok" });

    } else {
        return NextResponse.json({ message: "Error" }, { status: 400 });
    }

}