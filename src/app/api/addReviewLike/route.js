// API endpoint to add a like to a review
export async function POST(request) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      const { reviewId, userId } = await request.json();
  
      const userObjectId = new mongoose.Types.ObjectId(userId);
  
      let review = await Review.findById(reviewId);
  
      if (!review) {
        return NextResponse.json({ error: "Review not found", success: false });
      }
  
      // Check if the user already liked the review
      if (review.likes.some(like => like.userId.equals(userObjectId))) {
        return NextResponse.json({ error: "User already liked this review", success: false });
      }
  
      review.likes.push({ userId: userObjectId });
  
      await review.save();
  
      return NextResponse.json({ review, success: true });
    } catch (error) {
      console.error("Error adding like to review:", error);
      return NextResponse.json({ error: error.message, success: false });
    }
  }
  