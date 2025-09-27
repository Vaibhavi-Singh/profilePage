const Experience = () => {
  const experience = [
    { role: "Frontend Developer", company: "ABC Corp", year: "2024" },
    { role: "Intern", company: "XYZ Ltd", year: "2023" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <ul className="border-l-2 border-blue-600 pl-4">
        {experience.map((exp, idx) => (
          <li key={idx} className="mb-4">
            <h3 className="font-semibold">{exp.role}</h3>
            <p>{exp.company}</p>
            <span className="text-sm text-gray-500">{exp.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
