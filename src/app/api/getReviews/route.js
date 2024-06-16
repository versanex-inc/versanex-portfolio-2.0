import { connectionStr } from "@/utils/db";
import { Review } from "@/utils/models/reviews";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await Review.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
