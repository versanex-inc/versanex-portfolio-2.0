import { connectionStr } from "@/utils/db";
import { Project } from "@/utils/models/project";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await Project.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
