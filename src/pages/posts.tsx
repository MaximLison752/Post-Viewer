import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import type { Post } from "../types/posts";

export const PostsPage = () => {
  const navigate = useNavigate();
  const { posts, loading, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <input
        type="search"
        placeholder="search post titles"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.map((p) => (
          <li key={p.id}>
            <span style={{ marginRight: "0.25rem" }}>{p.title}</span>
            <button type="button" onClick={() => navigate(`/posts/${p.id}`)}>
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
