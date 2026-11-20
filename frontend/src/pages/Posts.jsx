import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Posts() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <main className="page-container"><p>Loading opportunities...</p></main>;
  if (error) return <main className="page-container"><p>Error: {error}</p></main>;

  return (
    <main className="page-container">
      <section className="page-heading">
        <p className="eyebrow">COMMUNITY BOARD</p>
        <h1>Explore Opportunities</h1>
        <p>Discover ideas and updates shared by our community.</p>
      </section>

      <div className="posts-grid">
        {data.slice(0, 12).map((post) => (
          <article className="post-card" key={post.id}>
            <span className="post-tag">Community post</span>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="post-link">
              Read more ?
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Posts;
