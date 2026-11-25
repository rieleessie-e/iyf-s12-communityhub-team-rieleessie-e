function PostCard({ title, description, employer }) {
  function handleViewOpportunity() {
    window.alert("Button clicked successfully!");
  }

  return (
    <article className="post-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p>Posted by: {employer}</p>

      <button onClick={handleViewOpportunity}>
        View Opportunity
      </button>
    </article>
  );
}

export default PostCard;