import { Review } from "@/utils/models/reviews";
import { User } from "@/utils/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure to replace with your database URL
    const { email, details } = await request.json();

    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found", success: false });
    }

    const review = await Review.create({
      user: user._id,
      details: details
    });

    user.reviews.push(review._id);
    await user.save();

    return NextResponse.json({ review, success: true });
  } catch (error) {
    console.error("Error saving review:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
