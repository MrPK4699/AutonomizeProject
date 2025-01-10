import React from "react";
import { Link } from "react-router-dom";

const ReposList = ({ repos }) => {
  return (
    <div className="repos-list-container">
      <h3>Repositories</h3>
      <ul className="repos-list">
        {repos.map((repo, index) => (
          <li key={index} className="repo-item">
            {/* Pass repo details using state */}
            <Link
              to={`/repos/${repo.owner.login}`}
              state={{ repoDetails: repo }}
            >
              {repo.name} - Go to details page
            </Link>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposList;
