import React from "react";

const FriendsList = ({ friends }) => {
  return (
      <div className="friends-list-container">
      <h3>Friends</h3>
      <div className="friends-grid">
            {friends.length===0 && <div>No friends found to fetch please click above button</div>}
        {friends.map((friend, index) => (
          <div key={index} className="friend-card">
            <img src={friend.avatar_url} alt="Friend Avatar" className="friend-avatar" />
            <p>{friend.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
