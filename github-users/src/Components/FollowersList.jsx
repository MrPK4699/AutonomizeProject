import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const FollowersList = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}/followers`);
        setFollowers(res.data);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };
    fetchFollowers();
  }, [username]);

  return (
    <div>
      <h3>Followers of {username}</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <Link to={`/repos/${follower.login}`}>{follower.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
