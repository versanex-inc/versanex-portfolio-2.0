import mongoose from "mongoose";
import { User } from "@/utils/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { name, email, image } = await request.json();

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return NextResponse.json({ error: "User already exists", success: false });
    }

    const user = await User.create({ name, email, image });

    return NextResponse.json({ message: "User Registered", user, success: true });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}