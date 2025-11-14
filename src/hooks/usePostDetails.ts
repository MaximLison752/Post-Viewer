import { useEffect, useState } from "react";
import { getComments, getPost } from "../api/posts";
import type { Comment, Post } from "../types/posts";

export const usePostDetails = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const [postData, commentData] = await Promise.all([
          getPost(postId),
          getComments(postId),
        ]);
        setPost(postData);
        setComments(commentData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch comments")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  return {
    post,
    comments,
    loading,
    error,
  };
};
