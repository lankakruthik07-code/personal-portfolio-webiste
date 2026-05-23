import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      
      {/* HERO SECTION */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Kruthik 👋
        </h1>

        <p className="text-xl">
          Full Stack Developer | React | Node.js | MongoDB
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS"].map(
            (skill, index) => (
              <div
                key={index}
                className="bg-white shadow-md px-5 py-3 rounded-xl"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((project) => project.title)
            .map((project) => (
              <div
                key={project._id}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="mb-4">
                  {project.description}
                </p>

                <p className="mb-4">
                  <strong>Tech Stack:</strong>{" "}
                  {project.techStack?.join(", ")}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Contact Me
        </h2>

        <p>Email: lankakruthik07@gmail.com</p>
      </section>
    </div>
  );
}

export default App;