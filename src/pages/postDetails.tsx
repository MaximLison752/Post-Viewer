import { useNavigate, useParams } from "react-router-dom";
import { usePostDetails } from "../hooks/usePostDetails";

export const PostDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { post, comments, loading, error } = usePostDetails(Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
        Close
      </button>
      <h1>{post?.title}</h1>
      <span>{post?.body}</span>
      <h2>Comments</h2>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.body}</li>
        ))}
      </ul>
    </div>
  );
};
