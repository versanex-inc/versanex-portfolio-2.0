import { connectionStr } from "@/utils/db";
import { Blog } from "@/utils/models/blogs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.log("Received Payload:");

    await mongoose.connect(connectionStr);

    let blog = new Blog(payload);

    // Save the blog to the database
    const result = await blog.save();
    console.log("blog saved successfully:");

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
