import { connectionStr } from "@/utils/db";
import { Project } from "@/utils/models/project";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.log("Received Payload:");

    await mongoose.connect(connectionStr);

    let project = new Project(payload);

    // Save the project to the database
    const result = await project.save();
    console.log("Project saved successfully:");

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
