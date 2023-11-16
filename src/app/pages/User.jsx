import React, { useState } from 'react';
import SidebarUser from "src/app/components/sidebarUser.jsx";
import 'src/app/styles/app.css';

export default function User() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <SidebarUser 
      classe={toggle ? 'sidebarOpen' : 'sidebarClose'} 
      list={toggle ? 'sidebarList' : 'sidebarClose'} 
      name={toggle ? 'sidebarName' : 'sidebarClose'} 
      form={toggle ? 'form' : 'sidebarClose'} 
      />
      <div>
        <div className={`card-image mapa_campus`} onClick={handleToggle}>
        </div>
      </div>
    </>
  );
}
