function PostCard(props) {
  return (
    <article className="post-card">
      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <p>Posted by: {props.employer}</p>

      <button>View Opportunity</button>
    </article>
  );
}

export default PostCard;