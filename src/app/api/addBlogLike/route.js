import { Blog } from "@/utils/models/blogs";
import { User } from "@/utils/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { blogId, userEmail } = await request.json();

    // Fetch the user by email
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ error: "User not found", success: false });
    }
    const userId = user._id;

    const userObjectId = new mongoose.Types.ObjectId(userId); // Correctly cast userId to ObjectId

    let blog = await Blog.findById(blogId);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found", success: false });
    }

    // Check if the user has already liked the blog
    const existingLikeIndex = blog.likes.findIndex(like => like.userId.equals(userObjectId));

    if (existingLikeIndex !== -1) {
      // User already liked the blog, so remove the like
      blog.likes.splice(existingLikeIndex, 1);
      blog.likesCount--;
    } else {
      // User has not liked the blog, so add a like
      blog.likes.push({ userId: userObjectId, blogId, like: true });
      blog.likesCount++;
    }

    await blog.save();

    return NextResponse.json({ blog, success: true });
  } catch (error) {
    console.error("Error handling like on blog:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
