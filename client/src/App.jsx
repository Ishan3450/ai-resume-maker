import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SetupResume from "./components/SetupResume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/resume/:resumeId/edit" element={<SetupResume />} />
    </Routes>
  );
};

export default App;
