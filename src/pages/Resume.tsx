const Resume = () => {
  const resumeLink = "/resume.pdf"; // apna resume public folder me daal dena

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <p className="mb-4">You can view or download my resume below:</p>
      <div className="flex gap-4">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          View Resume
        </a>
        <a
          href={resumeLink}
          download
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
