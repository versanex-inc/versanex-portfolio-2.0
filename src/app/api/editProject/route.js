import { connectionStr } from "@/utils/db";
import { Project } from "@/utils/models/project";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function PUT(request) {
  try {
    const payload = await request.json();
    const { slug, ...updateData } = payload;
    console.log("Received Payload for Update:", payload);

    await mongoose.connect(connectionStr);

    // Find the project by its slug
    const project = await Project.findOne({ slug });

    if (!project) {
      return NextResponse.json({ error: "Project not found", success: false });
    }

    // Update the project fields
    Object.assign(project, updateData);

    // Save the updated project
    const result = await project.save();
    console.log("Project updated successfully:", result);

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}