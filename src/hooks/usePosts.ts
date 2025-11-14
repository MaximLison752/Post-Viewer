import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import type { Post } from "../types/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch posts")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
  };
};
