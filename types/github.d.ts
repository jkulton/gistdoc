export interface File {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
  truncated: boolean;
  content: string;
}

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Gist {
  files: { [key: string]: File };
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user?: GithubUser;
  comments_url: string;
  owner: GithubUser;
}

export interface GithubComment {
  url: string;
  id: number;
  node_id: string;
  user: GithubUser;
  author_association: string;
  created_at: string;
  updated_at: string;
  body: string;
}
