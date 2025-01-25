import React from 'react';
import { motion } from 'framer-motion';
import ContributionGraph from './ContributionGraph';
import { GitHubUser, UserStats } from '../types/github';

interface Achievement {
  title: string;
  description: string;
  icon: string;
  condition: boolean;
}

interface UserDashboardProps {
  user: GitHubUser;
  stats: UserStats;
}

export default function UserDashboard({ user, stats }: UserDashboardProps) {
  const achievements: Achievement[] = [
    {
      title: 'Commit Conqueror',
      description: 'Made over 1,000 commits',
      icon: '🏆',
      condition: stats.totalCommits > 1000
    },
    {
      title: 'Pull Request Prodigy',
      description: 'Created over 50 pull requests',
      icon: '🌟',
      condition: stats.pullRequests > 50
    },
    {
      title: 'Open Source Advocate',
      description: 'Contributing to public repositories',
      icon: '🌍',
      condition: user.public_repos > 0
    },
    {
      title: 'Rising Star',
      description: 'Maintained a 30+ day streak',
      icon: '⭐',
      condition: stats.streak > 30
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/40 rounded-xl border border-purple-500/20 p-8 backdrop-blur-sm"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={user.avatar_url}
            alt={`${user.name || user.login}'s avatar`}
            className="w-32 h-32 rounded-full ring-2 ring-purple-500/50"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">
              {user.name || user.login}
            </h2>
            <p className="text-gray-400 mb-4">@{user.login}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Repositories" value={user.public_repos} />
              <StatCard title="Total Commits" value={stats.totalCommits} />
              <StatCard title="Pull Requests" value={stats.pullRequests} />
              <StatCard title="Current Streak" value={`${stats.streak} days`} />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ContributionGraph username={user.login} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-black/40 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4">Top Languages</h3>
          <div className="space-y-3">
            {Object.entries(stats.topLanguages).slice(0, 5).map(([lang, count]) => (
              <div key={lang} className="flex items-center justify-between">
                <span className="text-gray-300">{lang}</span>
                <div className="w-48 bg-black/60 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{
                      width: `${(count / Object.values(stats.topLanguages)[0]) * 100}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/40 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              achievement.condition && (
                <div
                  key={achievement.title}
                  className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h4 className="font-bold text-white">{achievement.title}</h4>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="bg-black/60 p-4 rounded-lg border border-purple-500/20">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}