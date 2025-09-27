// src/components/ProfileHeader.tsx
export default function ProfileHeader() {
  const user = {
    name: "singhvaibhavi665",
    email: "singhvaibhavi665@gmail.com",
    followers: 0,
    following: 0,
    communities: 0,
    profilePic: "https://via.placeholder.com/100",
  };

  return (
    <div className="animate-fade-in">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <div className="relative">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white/50 object-cover shadow-xl"
              />
              <button className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-gentle">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-primary-100 bg-clip-text text-primary">
                {user.name}
              </h2>
              <p className="text-primary-200 text-lg">{user.email}</p>
            </div>

            <div className="flex gap-8 mt-6 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {[
                { label: 'Followers', value: user.followers },
                { label: 'Following', value: user.following },
                { label: 'Communities', value: user.communities }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <p className="text-2xl font-bold text-black group-hover:text-primary-300 transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-300 group-hover:text-primary-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Badge */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <svg className="w-6 h-6 text-white animate-bounce-gentle" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white font-bold text-lg">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
