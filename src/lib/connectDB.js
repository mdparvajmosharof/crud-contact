import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async ()=>{
    if(db) return db;
    try {
        const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.8srq6fs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });

        db = client.db("crud")
        return db;
    } catch (error) {
        console.log(error)
    }
}