import { fetchJson } from "./api";

export interface GithubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export async function getGithubProfile(username = "ramatullah12"): Promise<GithubProfile> {
  return fetchJson<GithubProfile>(`https://api.github.com/users/${username}`);
}

