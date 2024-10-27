import { connectDB } from "@/lib/connectDB";

export const POST = async(request)=>{
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        
        console.log(newUser)

        const exist = await userCollection.findOne({email : newUser.email})
        if(exist){
            return Response.json({message : "user exist"}, {status: 304})
        }

        const res = await userCollection.insertOne(newUser);
        return Response.json({message : "New user added"}, {status: 200})
        
    } catch (error) {
        return Response.json({message : "Something went wrong"}, {status:500})
    }
}