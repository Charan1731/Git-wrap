import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';
import { fetchGitHubUser, fetchUserStats } from './utils/github';
import type { GitHubUser } from './types/github';
import type { UserStats } from './types/github';

function App() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<{ user: GitHubUser; stats: UserStats } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const user = await fetchGitHubUser(username);
      const stats = await fetchUserStats(username);
      setUserData({ user, stats });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {!userData && (
        <>
          <Hero />
          <section id="github-wrapped" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Generate Your GitHub Wrapped
                </h2>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter GitHub username"
                      className="flex-1 px-4 py-2 rounded-lg bg-black/60 border border-purple-500/20 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300 disabled:opacity-50"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Loading...' : 'Generate'}
                    </button>
                  </div>
                </form>
                
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-red-500"
                  >
                    {error}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </section>
        </>
      )}

      {userData && (
        <section className="py-20 px-4">
          <UserDashboard user={userData.user} stats={userData.stats} />
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;