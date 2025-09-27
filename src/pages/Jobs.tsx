const Jobs = () => {
  const jobs = [
    { title: "Frontend Developer", status: "Applied" },
    { title: "Backend Developer", status: "Interview Scheduled" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Jobs</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Job Title</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={idx}>
              <td className="p-2 border">{job.title}</td>
              <td className="p-2 border">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobs;
