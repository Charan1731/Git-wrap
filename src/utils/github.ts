const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) throw new Error('User not found');
  return response.json();
}

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=100`);
  if (!response.ok) throw new Error('Failed to fetch repositories');
  return response.json();
}

export async function fetchUserStats(username: string): Promise<UserStats> {
  const repos = await fetchUserRepos(username);
  
  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  // Sort languages by usage count
  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  // Note: These are approximations as the actual data would require more API calls
  return {
    totalCommits: repos.length * 15, // Rough estimate
    pullRequests: repos.length * 2,  // Rough estimate
    issues: repos.length * 3,        // Rough estimate
    topLanguages,
    streak: Math.floor(Math.random() * 100), // Placeholder
  };
}