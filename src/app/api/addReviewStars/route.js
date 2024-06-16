import { Review } from "@/utils/models/reviews";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { reviewId, userId, rating } = await request.json();

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5", success: false });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId); // Correctly cast userId to ObjectId

    let review = await Review.findById(reviewId).populate("user");
    if (!review) {
      return NextResponse.json({ error: "Review not found", success: false });
    }

    const starIndex = review.stars.findIndex(star => star.userId.equals(userObjectId));

    if (starIndex === -1) {
      review.stars.push({ userId: userObjectId, rating });
    } else {
      review.stars[starIndex].rating = rating;
    }

    await review.save();

    return NextResponse.json({ review, success: true });
  } catch (error) {
    console.error("Error updating review stars:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}