import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy: "jwt"
    },

    providers:[
        CredentialsProvider({

            credentials:{
                email: {label: "Email", type: "email", placeholder: "Your email"},
                password : {label:"Password", type : "password", placeholder: "Your Password"}
            },

            async authorize(credentials){
                const {email, password } = credentials;

                if(!credentials){
                    return null
                }
                
                if(email){
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({email})

                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser;
                        }
                    }
                }

                return  null;
            }
        })
    ]
};
const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}