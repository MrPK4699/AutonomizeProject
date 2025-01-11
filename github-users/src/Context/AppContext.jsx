import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
    const [friends, setFriends] = useState([]);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState("");

  return (
    <AppContext.Provider value={{ userDetails, setUserDetails, friends, setFriends, repos, setRepos, error, setError }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
