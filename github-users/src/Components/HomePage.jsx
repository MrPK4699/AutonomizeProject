import React from "react";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";
import FriendsList from "./FriendsList";
import ReposList from "./RepoList";
import { useAppContext } from "../Context/AppContext";
import UserList from "./UserList";

const HomePage = () => {

  const {  userDetails, setUserDetails, friends, setFriends, repos, setRepos, error, setError  } = useAppContext();

  const URI= process.env.REACT_APP_BACKEND_URI;

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`${URI}users`, {
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
      setFriends(data.friends);
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
      await setFriends(data.friends || []);
    } catch (err) {
      console.error("Failed to fetch friends:", err);
    }
  };

  const updateUser = async (username, updates) => {
    const response = await fetch(`${URI}users/${username}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error("Failed to update user.");
    const updatedUser = await response.json();
    setUserDetails(updatedUser);
  };

  const softDeleteUser = async (username) => {
    const response = await fetch(`${URI}users/${username}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete user.");
    setUserDetails(null);
    setFriends([]);
    setRepos([]);
  };

  return (
    <div className="homepage">
      <SearchBar onSearch={fetchUser} />
      {error && <p className="error">{error}</p>}
      {userDetails ? (
        <>
          <UserDetails user={userDetails} fetchUser={fetchUser}  onUserUpdate={updateUser} onUserDelete={softDeleteUser} />
          <button
            className="fetch-friends"
            onClick={() => fetchFriends(userDetails.username)}
          >
            Fetch Friends 
          </button>
          <FriendsList friends={friends}  fetchUser={fetchUser}/>
          <ReposList repos={repos} />
        </>
      ) : <UserList fetchUser={fetchUser}/>}
      
    </div>
  );
};

export default HomePage;

