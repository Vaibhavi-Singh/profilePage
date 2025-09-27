// const Skills = () => {
//   const skills = [
//     { name: "React", level: 85, category: "Frontend" },
//     { name: "TypeScript", level: 80, category: "Language" },
//     { name: "Node.js", level: 75, category: "Backend" },
//     { name: "Tailwind CSS", level: 90, category: "Styling" },
//     { name: "Firebase", level: 70, category: "Database" },
//     { name: "JavaScript", level: 85, category: "Language" },
//     { name: "Python", level: 65, category: "Language" },
//     { name: "Git", level: 80, category: "Tools" },
//   ];

//   const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

//   const getCategoryColor = (category: string) => {
//     const colors = {
//       Frontend: 'from-blue-500 to-cyan-500',
//       Backend: 'from-green-500 to-emerald-500',
//       Language: 'from-purple-500 to-indigo-500',
//       Styling: 'from-pink-500 to-rose-500',
//       Database: 'from-orange-500 to-red-500',
//       Tools: 'from-yellow-500 to-amber-500',
//     };
//     return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
//   };

//   return (
//     <div className="space-y-8">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
//           My Skills
//         </h2>
//         <p className="text-primary-200 text-lg">Technologies and tools I work with</p>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2">
//         {skills.map((skill, index) => (
//           <div
//             key={skill.name}
//             className="group animate-slide-up backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:scale-105"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} shadow-lg`}></div>
//                 <h3 className="text-xl font-bold text-white">{skill.name}</h3>
//               </div>
//               <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(skill.category)} text-white shadow-lg`}>
//                 {skill.category}
//               </div>
//             </div>

//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span className="text-primary-200">Proficiency</span>
//                 <span className="text-white font-medium">{skill.level}%</span>
//               </div>
//               <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
//                 <div
//                   className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out shadow-lg`}
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Hover glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-accent-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//           </div>
//         ))}
//       </div>

//       {/* Skill categories overview */}
//       <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
//         <h3 className="text-2xl font-bold text-white mb-6 text-center">Skill Categories</h3>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {categories.slice(1).map((category) => {
//             const categorySkills = skills.filter(skill => skill.category === category);
//             const avgLevel = Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length);

//             return (
//               <div key={category} className="text-center group">
//                 <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                   <span className="text-white font-bold text-lg">{avgLevel}%</span>
//                 </div>
//                 <h4 className="text-white font-medium mb-1">{category}</h4>
//                 <p className="text-primary-300 text-sm">{categorySkills.length} skills</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

const Skills = () => { 
  const skills = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Language" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Tailwind CSS", level: 90, category: "Styling" },
    { name: "Firebase", level: 70, category: "Database" },
    { name: "JavaScript", level: 85, category: "Language" },
    { name: "Python", level: 65, category: "Language" },
    { name: "Git", level: 80, category: "Tools" },
  ];

  const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Frontend: 'bg-blue-500',
      Backend: 'bg-green-500',
      Language: 'bg-purple-500',
      Styling: 'bg-pink-500',
      Database: 'bg-orange-500',
      Tools: 'bg-yellow-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">My Skills</h2>
        <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(skill.category)}`}>
                {skill.category}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Proficiency</span>
                <span className="font-medium text-gray-900">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${getCategoryColor(skill.category)} h-3 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
