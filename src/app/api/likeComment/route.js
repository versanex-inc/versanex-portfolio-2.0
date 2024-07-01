// pages/api/likeComment.js
import { Comment } from '@/utils/models/blogs';
import mongoose from 'mongoose';
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const { commentId, userId } = await request.json();

    let comment = await Comment.findById(commentId);
    if (!comment) {
      return NextResponse.json({ error: "Comment not found", success: false });
    }

    const isLiked = comment.likes.some(like => like.userId.toString() === userId);
    if (isLiked) {
      comment.likes = comment.likes.filter(like => like.userId.toString() !== userId);
    } else {
      comment.likes.push({ userId });
    }

    await comment.save();

    return NextResponse.json({ success: true, likes: comment.likes.length });
  } catch (error) {
    console.error("Error liking comment:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
