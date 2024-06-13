import { Review } from "@/utils/models/reviews";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { reviewId, userId, feedback } = await request.json();

    if (!feedback) {
      return NextResponse.json({ error: "Feedback is required", success: false });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId); // Correctly cast userId to ObjectId

    let review = await Review.findById(reviewId).populate("user");
    if (!review) {
      return NextResponse.json({ error: "Review not found", success: false });
    }

    review.feedback.push({ userId: userObjectId, feedback });

    await review.save();

    return NextResponse.json({ review, success: true });
  } catch (error) {
    console.error("Error adding feedback to review:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
