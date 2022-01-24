import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Detail from "../pages/Detail"

function Router() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:repos_author/:repos_name" element={<Detail />} />
      </Routes>
  );
}

export default Router;