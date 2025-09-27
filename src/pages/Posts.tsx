const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "My First Blog",
      desc: "This is my first blog post!",
      date: "2024-01-15",
      category: "Personal",
      readTime: "2 min read"
    },
    {
      id: 2,
      title: "React with Tailwind",
      desc: "Learning React + Tailwind CSS for modern web development.",
      date: "2024-01-20",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "TypeScript Rocks",
      desc: "Why I love TypeScript and how it improves code quality.",
      date: "2024-01-25",
      category: "Programming",
      readTime: "3 min read"
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Personal: 'from-pink-500 to-rose-500',
      Technology: 'from-blue-500 to-cyan-500',
      Programming: 'from-purple-500 to-indigo-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
          My Posts
        </h2>
        <p className="text-gray-400 text-lg">Thoughts, ideas, and insights</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="group relative animate-slide-up hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white shadow-lg`}>
                  {post.category}
                </div>
                <span className="text-primary-300 text-sm">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-primary-200 mb-4 leading-relaxed">
                {post.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-primary-300 text-sm">{post.date}</span>
                <button className="group/btn flex items-center gap-2 text-primary-300 hover:text-blue transition-colors duration-300">
                  <span className="text-sm font-medium">Read more</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-accent-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state for when there are no posts */}
      {posts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 12l2 2 4-4m6 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No posts yet</h3>
          <p className="text-primary-300">Your thoughts and ideas will appear here soon!</p>
        </div>
      )}
    </div>
  );
};

export default Posts;
