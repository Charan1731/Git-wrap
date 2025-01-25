import React from "react";
import "github-calendar/dist/github-calendar.css";
import GitHubCalendar from "react-github-calendar";

export default function ContributionGraph({ username }: { username: string }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-black/40 rounded-xl border border-purple-500/20 backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-4 text-gray-100">
        Contribution Activity (2024)
      </h3>
      <div className="bg-black/60 p-6 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
        <GitHubCalendar 
          username={username}
          theme={{
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
          }}
        />
      </div>
    </div>
  );
}