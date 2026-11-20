import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO KAZICONNECT</p>
          <h1>Discover opportunities. Connect. Grow.</h1>
          <p className="hero-description">
            Find opportunities, share ideas and connect with a community
            that helps you move forward.
          </p>
          <div className="hero-buttons">
            <Link to="/posts" className="btn-primary">Explore Opportunities</Link>
            <Link to="/create-post" className="btn-secondary">Share an Opportunity</Link>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <h2>Opportunities start with connections.</h2>
        <p>
          KaziConnect brings opportunities and people together in one place.
          Explore community posts or share something valuable with others.
        </p>
      </section>
    </main>
  );
}

export default Home;
