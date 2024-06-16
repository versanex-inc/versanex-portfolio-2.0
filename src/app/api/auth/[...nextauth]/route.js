import { connectionStr } from "@/utils/db";
import { User } from "@/utils/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react";
import mongoose from "mongoose";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks:{
        async signIn({user, account}){

            console.log("Account : ",account)
            console.log("User : ",user)

            if(account.provider === 'google'){
                 const {name,email,image} = user;
                try {
                    await mongoose.connect(connectionStr);
                    const UserExists = await User.findOne({email});
                    if(!UserExists){
                        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`,{
                            method: "POST",
                            header:{
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                                image,
                            }),
                        });
    
                        if(res.ok){
                            return user;
                        }
                    }
                    
                } catch (error) {
                  console.log(error)
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);

export {handler as GET,handler as POST};