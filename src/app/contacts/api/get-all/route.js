import { connectDB } from "@/lib/connectDB"

export const GET = async ()=>{
    const db = await connectDB();
    const contactCollection = await db.collection("contacts")
    try {
        const contacts = await contactCollection.find().toArray();
        return Response.json({contacts})
    } catch (error) {
        console.log(error)
    }
}