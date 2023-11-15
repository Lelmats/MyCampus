import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "src/app/pages/Admin.jsx";
import User from "src/app/pages/User.jsx";

export default function App() {
  return (
    <>
      <Admin/>
      {/* <User/> */}
    </>
  );
}