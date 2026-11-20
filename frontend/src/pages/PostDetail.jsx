import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function PostDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <main className="page-container"><p>Loading post...</p></main>;
  if (error) return <main className="page-container"><p>Error: {error}</p></main>;

  return (
    <main className="page-container post-detail">
      <Link to="/posts" className="post-link">Back to opportunities</Link>
      <article className="post-detail-card">
        <span className="post-tag">Community post #{data.id}</span>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </article>
    </main>
  );
}

export default PostDetail;
