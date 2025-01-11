import React from "react";
import { Link } from "react-router-dom";

const ReposList = ({ repos }) => {
  
  return (
    <div className="repos-list-container">
      <h3>Repositories</h3>
      <ul className="repos-list">
        {repos.map((repo, index) => (
          <li key={index} className="repo-item">
            {/* Repository details */}
            {/* <div className="repo-details"> */}
              {/* Icon (placeholder for now) */}
              <div className="repo-icon">
                <img
                  src={repo.owner.avatar_url}
                  alt={`${repo.owner.login} avatar`}
                  className="repo-avatar"
                />
              </div>

              {/* Main details */}
              <div className="repo-info">
                <h4>
                  <Link
                    to={`/repos/${repo.owner.login}`}
                    state={{ repoDetails: repo }}
                    className="repo-name"
                  >
                    {repo.name}
                  </Link>
                </h4>
                <p className="repo-description">
                  {repo.description || "No description available."}
                </p>
              </div>
            {/* </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposList;

