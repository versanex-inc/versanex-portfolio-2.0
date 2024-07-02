"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import moment from 'moment';
import "./Comments.css";

const CommentSection = ({ blogId, users, session }) => {
  const [onclickhover, setOnclickHover] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggleonclick = () => setOnclickHover(!onclickhover);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getBlogs`);
        const data = await response.json();
        const blog = data.result.find(blog => blog._id === blogId);
        if (blog) {
          setComments(blog.comments.reverse()); // Reverse the comments here
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [blogId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = async () => {
    if (!session?.user?.email) {
      alert('Please sign in first to comment.');
      return;
    }

    const currentUser = users.find(user => user.email === session.user.email);
    if (!currentUser) {
      alert('User not found.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addBlogComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blogId,
          userId: currentUser._id,
          comment
        })
      });

      const data = await response.json();
      if (data.success) {
        setComments([{
          ...data.newComment,
          user: currentUser // Add user information to the new comment
        }, ...comments]); // Add new comment at the beginning
        setComment(""); // Clear the input field
      } else {
        console.error('Error posting comment:', data.error);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleLikeComment = async (commentId) => {
    if (!session?.user?.email) {
      alert('Please sign in first to like a comment.');
      return;
    }

    const currentUser = users.find(user => user.email === session.user.email);
    if (!currentUser) {
      alert('User not found.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/likeComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          commentId,
          userId: currentUser._id,
          blogId
        })
      });

      const data = await response.json();
      if (data.success) {
        // Update the likes and likesCount for the specific comment
        setComments(comments.map(comment => {
          if (comment._id === commentId) {
            return {
              ...comment,
              likesCount: comment.likes.includes(currentUser._id) ? comment.likesCount - 1 : comment.likesCount + 1,
              likes: comment.likes.includes(currentUser._id)
                ? comment.likes.filter(id => id !== currentUser._id)
                : [...comment.likes, currentUser._id]
            };
          }
          return comment;
        }));
      } else {
        console.error('Error liking comment:', data.error);
      }
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  return (
    <div>
      <div className="blog_coment_section">
        <div className="blog_comments-container">
          <h1>Comment Section</h1>
          <div className="blog_comentbox">
            <div className="cometbox_main">
              <div
                onFocus={toggleonclick}
                className={`cometbox_main_input ${onclickhover ? "hovercomentbox" : ""}`}
              >
                <input 
                  type="text" 
                  placeholder="Enter Your comment here" 
                  value={comment}
                  onChange={handleCommentChange}
                />
                <div className="comentbox_bnt">
                  <button onClick={handlePostComment}>Post</button>
                </div>
              </div>
            </div>
          </div>

          <ul id="comments-list" className="blog_comments-list">
            {comments.map((comment, index) => {
              const commentUser = users.find(user => user._id === comment.userId);
              const isLiked = comment.likes.includes(session?.user?.id);

              return (
                <li key={index}>
                  <div className="blog_comment-main-level">
                    <div className="blog_comment-avatar">
                      <Image
                        src={commentUser?.image || '/default-avatar.png'}
                        height={50}
                        width={50}
                        alt="profile avatar"
                      />
                    </div>
                    <div className="blog_comment-box">
                      <div className="blog_comment-head">
                        <h6 className="blog_comment-name">{commentUser?.name || 'Anonymous'}</h6>
                        <span>{moment(comment.createdAt).fromNow()}</span>
                        <div className="coment_sect_icons">
                          <span
                            className={`icon_cmnt_heart ${isLiked ? 'liked' : ''}`}
                            onClick={() => handleLikeComment(comment._id)}
                          >
                            <FaHeart />
                          </span>
                          <span className="cmnt_like_count">{comment.likesCount}</span>
                        </div>
                      </div>
                      <div className="blog_comment-content">
                        {comment.comment}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
