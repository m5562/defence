import React from "react";
import "./output.css";
import Login from "./comps/Login";
import { Route, Routes } from "react-router-dom";
import Error from "./comps/Error";
import Home from "./comps/Home";
import Register from "./comps/Register";
import Content from "./comps/Content";
import Morepage from "./comps/Morepage";
import AdminLogin from "./comps/AdminLogin";
import AdminDashboard from "./comps/AdminDashboard";

const App = () => {
  return (
    <div className="h-dvh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/content" element={<Content />} />
        <Route path="/more" element={<Morepage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
