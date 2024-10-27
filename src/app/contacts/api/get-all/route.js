import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async ()=>{
    const db = await connectDB();
    const contactCollection = await db.collection("contacts")
    try {
        const contacts = await contactCollection.find().toArray();
        return NextResponse.json({contacts})
    } catch (error) {
        return NextResponse.json({ message: "Something Went Wrong" });
    }
}