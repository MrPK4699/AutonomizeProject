import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import RepoDetail from "./Components/RepoDetail";

import './App.css'
import AppProvider from "./Context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <header><h1>GITHUB PROFILE</h1></header>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repos/:username" element={<RepoDetail />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;

