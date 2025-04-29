import React from "react";

function Projects() {
  // Placeholder data for projects - replace with your actual project details
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of Project One.",
      link: "#", // Link to project demo or repo
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>

      <div className="text-center mb-8">
        <a
          href="https://github.com/pascallaub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline text-xl"
        >
          Visit my GitHub Profile
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Learn More
            </a>
          </div>
        ))}
        {/* Add more project cards here or dynamically generate them */}
      </div>
      {/* You can add more detailed project sections or previews below */}
    </div>
  );
}

export default Projects;
