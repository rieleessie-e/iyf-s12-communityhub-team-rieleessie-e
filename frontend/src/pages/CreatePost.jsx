import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function CreatePost() {
  const [posts, setPosts] = useLocalStorage("community-posts", []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      setMessage("Please fill in both fields.");
      return;
    }

    setPosts([...posts, {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
    }]);

    setTitle("");
    setBody("");
    setMessage("Your post has been saved successfully!");
  }

  return (
    <main className="page-container create-page">
      <section className="page-heading">
        <p className="eyebrow">COMMUNITY CONTRIBUTION</p>
        <h1>Share an Opportunity</h1>
        <p>Share an idea, update or opportunity with the community.</p>
      </section>

      <form className="create-post-form" onSubmit={handleSubmit}>
        <label htmlFor="post-title">Post title</label>
        <input id="post-title" value={title}
          onChange={(e) => setTitle(e.target.value)} required />

        <label htmlFor="post-body">Post content</label>
        <textarea id="post-body" rows="6" value={body}
          onChange={(e) => setBody(e.target.value)} required />

        <button type="submit" className="btn-primary">Publish Post</button>

        {message && <p className="form-message" role="status">{message}</p>}
      </form>
    </main>
  );
}

export default CreatePost;
