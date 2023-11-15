import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Home from "src/app/pages/index.jsx";

export default function App() {
    return (
      <>
        <Sidebar/>
        <Home/>
      </>
    );
  }