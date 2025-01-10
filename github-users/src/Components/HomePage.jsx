import React, { useState } from "react";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";
import FriendsList from "./FriendsList";
import ReposList from "./RepoList";

const HomePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [friends, setFriends] = useState([]);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const URI= process.env.REACT_APP_BACKEND_URI;

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`https://autonomize-project.vercel.app/api/users`, {
      // const response = await fetch(`${URI}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserDetails(data);
      setError("");

      // Fetch repositories
      const reposResponse = await fetch(
        // `https://api.github.com/users/${username}/repos`
        data.repos_url
      );
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUserDetails(null);
      setFriends([]);
      setRepos([]);
    }
  };

  const fetchFriends = async (username) => {
    try {
      const response = await fetch(
        `${URI}users/${username}/friends`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      setFriends(data.friends || []);
    } catch (err) {
      console.error("Failed to fetch friends:", err);
    }
  };

  return (
    <div className="Homepage">
      <SearchBar onSearch={fetchUser} />
      {error && <p className="error">{error}</p>}
      {userDetails && (
        <>
          <UserDetails user={userDetails} />
          <button
            className="fetch-friends"
            onClick={() => fetchFriends(userDetails.username)}
          >
            Fetch Friends
          </button>
          <FriendsList friends={friends} />
          <ReposList repos={repos} />
        </>
      )}
    </div>
  );
};

export default HomePage;

