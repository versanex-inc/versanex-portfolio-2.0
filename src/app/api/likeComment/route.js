import { Blog, Comment } from "@/utils/models/blogs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const { commentId, userId, blogId } = await request.json();

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return NextResponse.json({ error: "Comment not found", success: false });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Toggle the like status for the comment
    if (comment.likes.includes(userObjectId)) {
      // User already liked this comment, so remove the like
      comment.likes = comment.likes.filter(id => !id.equals(userObjectId));
      comment.likesCount--;
    } else {
      // Add the like to the comment
      comment.likes.push(userObjectId);
      comment.likesCount++;
    }

    await comment.save();

    // Update the comment in the corresponding blog
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found", success: false });
    }

    // Find and update the specific comment in the blog
    const commentInBlog = blog.comments.id(commentId);
    if (commentInBlog) {
      commentInBlog.likes = comment.likes;
      commentInBlog.likesCount = comment.likesCount;
    }

    await blog.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error toggling like:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
