import mongoose from "mongoose";
import { connectionStr } from "@/utils/db";
import { User } from "@/utils/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,email} = await request.json();
    await mongoose.connect(connectionStr);

    await User.create({name,email});
    return NextResponse.json({message: "User Registered"});
}