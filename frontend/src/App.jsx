import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";

function App() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Build modern websites and applications.",
      employer: "Tech Solutions Kenya",
    },
    {
      id: 2,
      title: "Data Analyst",
      description: "Analyze data and generate useful insights.",
      employer: "Data Africa",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description: "Design beautiful and user-friendly interfaces.",
      employer: "Creative Hub",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <h2>Welcome to KaziConnect</h2>

        <p>
          Discover opportunities, connect with employers,
          and take the next step in your career.
        </p>

        <Sidebar />

        {jobs.length > 0 ? (
          jobs.map((job) => (
            <PostCard
              key={job.id}
              title={job.title}
              description={job.description}
              employer={job.employer}
            />
          ))
        ) : (
          <p>No job opportunities available at the moment.</p>
        )}

        <Button />
      </main>

      <Footer />
    </>
  );
}

export default App;