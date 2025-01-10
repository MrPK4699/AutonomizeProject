import React from "react";

const UserDetails = ({ user }) => {
      if (!user) {
            return <p className="no-user-message">No user found</p>;
          }
        
  return (
      <div className="user-details-container">
      <img src={user.avatar_url} alt="User Avatar" className="user-avatar" />
      <div className="user-info">
        <h2>{user.name || user.username}</h2>
        <p>{user.bio}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Public Repos:</strong> {user.public_repos}</p>
        <p><strong>Followers:</strong> {user.followers}</p>
        <p><strong>Following:</strong> {user.following}</p>
      </div>
    </div>
  );
};

export default UserDetails;
