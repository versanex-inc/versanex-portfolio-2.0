import mongoose from 'mongoose';

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
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of user IDs who liked the comment
  likesCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Like Schema for Blogs
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
  descriptions: [{ type: String }],
  list: [{ type: String }],
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
  likesCount: { type: Number, default: 0 }
}, { timestamps: true });

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogsSchema);
export const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);
export const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
