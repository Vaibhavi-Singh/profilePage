const Projects = () => {
  const projects = [
    { name: "Portfolio Website", link: "#" },
    { name: "E-commerce App", link: "#" },
    { name: "Chat App", link: "#" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            className="bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
          >
            {proj.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
