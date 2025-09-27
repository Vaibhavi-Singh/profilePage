const Achievements = () => {
  const achievements = [
    { title: "Hackathon Winner", year: "2023" },
    { title: "Best Project Award", year: "2024" },
    { title: "Top Performer", year: "2022" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((ach, idx) => (
          <div key={idx} className="bg-yellow-100 p-4 rounded shadow">
            <h3 className="font-semibold">{ach.title}</h3>
            <p className="text-sm text-gray-600">{ach.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
