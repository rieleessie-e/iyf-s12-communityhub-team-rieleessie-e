import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import sidebar from "./components/sidebar";
import Button from "./components/Button";


function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Welcome to KaziConnect</h2>
        <p>
          Discover opportunities, connect with employers,
          and take the next step in your career.
        </p>
        <sidebar />
        <PostCard
  title="Frontend Developer"
  description="Build modern websites and applications."
  employer="Tech Solutions Kenya"
/>

<PostCard
  title="Data Analyst"
  description="Analyze data and generate useful insights."
  employer="Data Africa"
/>

<PostCard
  title="UI/UX Designer"
  description="Design beautiful and user-friendly interfaces."
  employer="Creative Hub"
/>
        <Button />
      
      </main>

      <Footer />
    </>
  );
}

export default App;