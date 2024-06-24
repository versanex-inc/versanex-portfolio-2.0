import mongoose from "mongoose";

// Comment Schema
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Comment Model
export const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

// Like Schema
const likeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  },
  like: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });

// Blog Schema
const blogsSchema = new mongoose.Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  descriptions: [{ type: String }], // Array of strings for multiple description paragraphs
  list: [{ type: String }], // Array of strings for the unordered list
  images: [{ url: String }],
  creatorName: { type: String },
  creatorNiche: { type: String },
  creatorPicture: { type: String },
  creatorProfile: { type: String },
  projectType: { type: String },
  category: { type: String, enum: ["Gfx Design", "Web Developing", "Video Editing"] },
  subCategory: { type: String, enum: ["Illustration", "Gfx", "Logo Design", "3d", "E-shop", "Business", "Portfolio"] },
  comments: [commentSchema],
  likes: [likeSchema],
  likesCount: { type: Number, default: 0 } // Track the number of likes
}, { timestamps: true });

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogsSchema);
