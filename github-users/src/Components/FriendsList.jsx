import React, { useRef } from "react";

const FriendsList = ({ friends }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="friends-list-container">
      <h3>Friends</h3>
      {friends.length === 0 && (
        <div className="no-friends">
          No friends found. Please click the button above to fetch friends.
        </div>
      )}
      <div className="slider-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div ref={sliderRef} className="friends-slider">
          {friends.map((friend, index) => (
            <div key={index} className="friend-card">
              <img
                src={friend.avatar_url}
                alt="Friend Avatar"
                className="friend-avatar"
              />
              <p>{friend.username}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FriendsList;

