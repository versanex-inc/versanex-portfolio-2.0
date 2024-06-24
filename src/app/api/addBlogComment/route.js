import { Blog, Comment } from "@/utils/models/blogs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { blogId, userId, comment } = await request.json();

    const newComment = new Comment({
      userId: new mongoose.Types.ObjectId(userId),
      blogId: new mongoose.Types.ObjectId(blogId),
      comment
    });

    await newComment.save();

    let blog = await Blog.findById(blogId);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found", success: false });
    }

    blog.comments.push(newComment);
    await blog.save();

    return NextResponse.json({ newComment, success: true });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
