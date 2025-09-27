import { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import TabNavigation from "../components/TabNavigation";

import SectionPosts from "./Posts";
import SectionSkills from "./Skills";
import SectionAchievements from "./Achievements";
import SectionExperience from "./Experience";
import SectionEducation from "./Education";
import SectionProjects from "./Projects";
import SectionJobs from "./Jobs";
import SectionResume from "./Resume";

const tabs = [
  "Posts",
  "Skills",
  "Achievements",
  "Experience",
  "Education",
  "Projects",
  "Jobs",
  "Resume",
] as const;

type Tab = (typeof tabs)[number];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Posts");

  const renderSection = () => {
    switch (activeTab) {
      case "Posts":
        return <SectionPosts />;
      case "Skills":
        return <SectionSkills />;
      case "Achievements":
        return <SectionAchievements />;
      case "Experience":
        return <SectionExperience />;
      case "Education":
        return <SectionEducation />;
      case "Projects":
        return <SectionProjects />;
      case "Jobs":
        return <SectionJobs />;
      case "Resume":
        return <SectionResume />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Tab Navigation */}
        <TabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Active Section */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
