import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import RepoDetail from "./Components/RepoDetail";

import './App.css'

const App = () => {
  return (
    <div className="app">
      <header><h1>GITHUB REPOS</h1></header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repos/:username" element={<RepoDetail />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;

