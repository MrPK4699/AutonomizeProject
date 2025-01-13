import React, { useState, useEffect } from "react";


const UserList = ({ fetchUser }) => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("username"); // Default sort
  const [selectedUsername, setSelectedUsername] = useState(null); // Selected user
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState("");
  const API_URL = process.env.REACT_APP_BACKEND_URI;

  // Fetch users from backend
  const fetchUsers = async (sortBy) => {
    try {
      const response = await fetch(`${API_URL}users?sortBy=${sortBy}`);
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setUsers([]);
    }
  };

  // Fetch users when sortBy changes
  useEffect(() => {
    fetchUsers(sortBy);
  }, [sortBy]);

  // Handle sorting dropdown change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle user card click
  const handleUserClick = async (username) => {
    setLoading(true); // Start loading
    setSelectedUsername(username); // Highlight selected user
    await fetchUser(username); // Fetch user details
    setLoading(false); // End loading
  };

  return (
    <div className="user-list-container">
      <h2>Users List</h2>
      {error && <p className="error">{error}</p>}

      <div className="sort-container">
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="username">Username</option>
          <option value="name">Name</option>
          <option value="followers">Followers</option>
          <option value="following">Following</option>
          <option value="public_repos">Public Repos</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}

      <div className="users-grid">
        {users.map((user) => (
          <div
            key={user.username}
            className={`user-card ${user.username === selectedUsername ? "selected" : ""}`}
            onClick={() => handleUserClick(user.username)}
          >
            <img
              src={user.avatar_url}
              alt={`${user.username}'s avatar`}
              className="user-avatar"
            />
            <h3>{user.name || "No Name Provided"}</h3>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Followers:</strong> {user.followers}
            </p>
            <p>
              <strong>Following:</strong> {user.following}
            </p>
            <p>
              <strong>Public Repos:</strong> {user.public_repos}
            </p>
            <a
              href={user.blog || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="user-blog"
            >
              {user.blog ? "Visit Blog" : "No Blog"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
