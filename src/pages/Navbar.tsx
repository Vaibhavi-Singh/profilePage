import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
