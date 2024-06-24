import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  service: { type: String ,enum: ["Graphics Designing", "Content Writing", "Website Developing", "Digital Marketing", "Video Editing", "SEO"] },
  name: { type: String},
  email: { type: String },
  organization: { type: String },
  details: { type: String },
  budget: { type: String, enum: ["50$ - 100$", "100$ - 500$", "500$ - 1000$", "1000$ - 5000$", "More"] },
  read: { type: Boolean, default: false }
}, { timestamps: true });

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
