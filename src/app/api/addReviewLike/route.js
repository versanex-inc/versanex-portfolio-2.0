import { Review } from "@/utils/models/reviews";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { reviewId, userId } = await request.json();

    const userObjectId = new mongoose.Types.ObjectId(userId); // Correctly cast userId to ObjectId

    let review = await Review.findById(reviewId);
    if (!review) {
      return NextResponse.json({ error: "Review not found", success: false });
    }

    // Check if the user has already liked the review
    const existingLikeIndex = review.likes.findIndex(like => like.userId.equals(userObjectId));

    if (existingLikeIndex !== -1) {
      // User already liked the review, so remove the like
      review.likes.splice(existingLikeIndex, 1);
    } else {
      // User has not liked the review, so add a like
      review.likes.push({ userId: userObjectId, likes: 1 });
    }

    await review.save();

    return NextResponse.json({ review, success: true });
  } catch (error) {
    console.error("Error handling like on review:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}