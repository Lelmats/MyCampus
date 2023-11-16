import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "src/app/pages/Admin.jsx";
import User from "src/app/pages/User.jsx";
import AdminF from "src/app/pages/AdminForm.jsx";
import AdmiPro from "src/app/pages/AdminProcess.jsx";
import AdminVer from "src/app/pages/AdminVerificado.jsx";
import UserHist from "./pages/UserHist";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/adminForm" element={<AdminF />} />
          <Route path="/adminPro" element={<AdmiPro />} />
          <Route path="/adminVer" element={<AdminVer />} />
          <Route path="/userHist" element={<UserHist />} />
        </Routes>
      </Router>
    </>
  );
}