import { connectDB } from "@/lib/connectDB";


export const POST = async(request)=>{
    const newContact = await request.json();
    try {
        const db = await connectDB();
        const contactCollection = db.collection("contacts");
        
        const res = await contactCollection.insertOne(newContact);
        return Response.json({message : "New contact added"}, {status: 200})
        
    } catch (error) {
        return Response.json({message : "Something went wrong"}, {status:500})
    }
}