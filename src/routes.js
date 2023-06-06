import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import ProjectCard from './pages/ProjectCard';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectCard />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default MainRoutes;
