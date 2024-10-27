import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const POST = async(request)=>{
    const newContact = await request.json();
    try {
        const db = await connectDB();
        const contactCollection = db.collection("contacts");
        
        const res = await contactCollection.insertOne(newContact);
        return NextResponse.json({message : "New contact added"}, {status: 200})
        
    } catch (error) {
        return NextResponse.json({message : "Something went wrong"}, {status:500})
    }
}