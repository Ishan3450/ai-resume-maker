import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SetupResume from "./components/SetupResume";
import ViewResume from "./components/ViewResume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/resume/:resumeId/edit" element={<SetupResume />} />
      <Route path="/dashboard/resume/:resumeId/view" element={<ViewResume />} />
    </Routes>
  );
};

export default App;
