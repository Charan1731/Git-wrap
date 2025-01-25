export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  name: string;
  language: string;
  stargazers_count: number;
  fork: boolean;
}

export interface UserStats {
  totalCommits: number;
  pullRequests: number;
  issues: number;
  topLanguages: { [key: string]: number };
  streak: number;
}