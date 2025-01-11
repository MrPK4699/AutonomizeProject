import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RepoDetail = () => {

  //   const repoDetails = {
  //   "id": 776107145,
  //   "node_id": "R_kgDOLkJ0iQ",
  //   "name": "TaskManagement_MERN",
  //   "full_name": "MrPK4699/TaskManagement_MERN",
  //   "private": false,
  //   "owner": {
  //     "login": "MrPK4699",
  //     "id": 142814922,
  //     "node_id": "U_kgDOCIMuyg",
  //     "avatar_url": "https://avatars.githubusercontent.com/u/142814922?v=4",
  //     "gravatar_id": "",
  //     "url": "https://api.github.com/users/MrPK4699",
  //     "html_url": "https://github.com/MrPK4699",
  //     "followers_url": "https://api.github.com/users/MrPK4699/followers",
  //     "following_url": "https://api.github.com/users/MrPK4699/following{/other_user}",
  //     "gists_url": "https://api.github.com/users/MrPK4699/gists{/gist_id}",
  //     "starred_url": "https://api.github.com/users/MrPK4699/starred{/owner}{/repo}",
  //     "subscriptions_url": "https://api.github.com/users/MrPK4699/subscriptions",
  //     "organizations_url": "https://api.github.com/users/MrPK4699/orgs",
  //     "repos_url": "https://api.github.com/users/MrPK4699/repos",
  //     "events_url": "https://api.github.com/users/MrPK4699/events{/privacy}",
  //     "received_events_url": "https://api.github.com/users/MrPK4699/received_events",
  //     "type": "User",
  //     "user_view_type": "public",
  //     "site_admin": false
  //   },
  //   "html_url": "https://github.com/MrPK4699/TaskManagement_MERN",
  //   "description": "Task Manager App is a web application designed to help users manage their tasks effectively.",
  //   "fork": false,
  //   "url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN",
  //   "forks_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/forks",
  //   "keys_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/keys{/key_id}",
  //   "collaborators_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/collaborators{/collaborator}",
  //   "teams_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/teams",
  //   "hooks_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/hooks",
  //   "issue_events_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/issues/events{/number}",
  //   "events_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/events",
  //   "assignees_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/assignees{/user}",
  //   "branches_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/branches{/branch}",
  //   "tags_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/tags",
  //   "blobs_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/git/blobs{/sha}",
  //   "git_tags_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/git/tags{/sha}",
  //   "git_refs_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/git/refs{/sha}",
  //   "trees_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/git/trees{/sha}",
  //   "statuses_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/statuses/{sha}",
  //   "languages_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/languages",
  //   "stargazers_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/stargazers",
  //   "contributors_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/contributors",
  //   "subscribers_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/subscribers",
  //   "subscription_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/subscription",
  //   "commits_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/commits{/sha}",
  //   "git_commits_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/git/commits{/sha}",
  //   "comments_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/comments{/number}",
  //   "issue_comment_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/issues/comments{/number}",
  //   "contents_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/contents/{+path}",
  //   "compare_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/compare/{base}...{head}",
  //   "merges_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/merges",
  //   "archive_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/{archive_format}{/ref}",
  //   "downloads_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/downloads",
  //   "issues_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/issues{/number}",
  //   "pulls_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/pulls{/number}",
  //   "milestones_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/milestones{/number}",
  //   "notifications_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/notifications{?since,all,participating}",
  //   "labels_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/labels{/name}",
  //   "releases_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/releases{/id}",
  //   "deployments_url": "https://api.github.com/repos/MrPK4699/TaskManagement_MERN/deployments",
  //   "created_at": "2024-03-22T17:38:53Z",
  //   "updated_at": "2024-08-28T13:32:56Z",
  //   "pushed_at": "2024-08-28T13:32:52Z",
  //   "git_url": "git://github.com/MrPK4699/TaskManagement_MERN.git",
  //   "ssh_url": "git@github.com:MrPK4699/TaskManagement_MERN.git",
  //   "clone_url": "https://github.com/MrPK4699/TaskManagement_MERN.git",
  //   "svn_url": "https://github.com/MrPK4699/TaskManagement_MERN",
  //   "homepage": "https://task-management-mern-eqkt.vercel.app/",
  //   "size": 1429,
  //   "stargazers_count": 0,
  //   "watchers_count": 0,
  //   "language": "JavaScript",
  //   "has_issues": true,
  //   "has_projects": true,
  //   "has_downloads": true,
  //   "has_wiki": true,
  //   "has_pages": false,
  //   "has_discussions": false,
  //   "forks_count": 0,
  //   "mirror_url": null,
  //   "archived": false,
  //   "disabled": false,
  //   "open_issues_count": 0,
  //   "license": null,
  //   "allow_forking": true,
  //   "is_template": false,
  //   "web_commit_signoff_required": false,
  //   "topics": [
  //     "bcrypt",
  //     "express-js",
  //     "jwt",
  //     "mongodb",
  //     "node-js",
  //     "reactjs"
  //   ],
  //   "visibility": "public",
  //   "forks": 0,
  //   "open_issues": 0,
  //   "watchers": 0,
  //   "default_branch": "main"
  // };
  const location = useLocation();
  const navigate = useNavigate();
  const { repoDetails } = location.state || {};
  console.log(repoDetails)
  return (
    <div className="repo-detail-container">
      <div className="owner-section">
        <img
          src={repoDetails.owner.avatar_url}
          alt="Owner Avatar"
          className="owner-avatar"
        />
        <div className="owner-info">
          <h2>{repoDetails.owner.login}</h2>
          <a
            href={repoDetails.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Profile
          </a>
        </div>
      </div>
      <div className="repo-section">
        <h1 className="repo-name">{repoDetails.name}</h1>
        <p className="repo-description">{repoDetails.description}</p>
        <div className="repo-stats">
          <p><strong>Language:</strong> {repoDetails.language || "N/A"}</p>
          <p><strong>Stars:</strong> {repoDetails.stargazers_count}</p>
          <p><strong>Forks:</strong> {repoDetails.forks_count}</p>
          <p><strong>Open Issues:</strong> {repoDetails.open_issues_count}</p>
        </div>
        <a
          href={repoDetails.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View Repository
        </a>
        <button onClick={() => navigate(-1)} className="back-button">
          Back to Repositories
        </button>
      </div>
    </div>
  );
};

export default RepoDetail;
