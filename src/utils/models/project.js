// utils/models/project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  images: [{ url: String }],
  creatorName: { type: String },
  creatorNiche: { type: String },
  creatorPicture: { type: String },
  creatorProfile: { type: String },
  projectType: { type: String },
  category: { type: String, enum: ["Gfx Design", "Web Developing", "Video Editing"] },
  subCategory: { type: String, enum: ["Illustration", "Gfx","Logo Design", "3d", "E-shop", "Buisness", "Portfolio"] },
  status: { type: String, enum: ["Progress", "Completed", "Holding", "Cancelled"] },
  deadline: { type: Date, default: Date.now }
});

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
