import { connectionStr } from "@/utils/db";
import { Blog } from "@/utils/models/blogs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function PUT(request) {
  try {
    const payload = await request.json();
    const { slug, ...updateData } = payload;
    console.log("Received Payload for Update:", payload);

    await mongoose.connect(connectionStr);

    // Find the blog by its slug
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found", success: false });
    }

    // Update the blog fields
    Object.assign(blog, updateData);

    // Save the updated blog
    const result = await blog.save();
    console.log("Blog updated successfully:", result);

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}