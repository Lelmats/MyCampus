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
      classe={toggle ? 'sidebarOpen' : 'nada'} 
      list={toggle ? 'sidebarList' : 'nada'} 
      name={toggle ? 'sidebarName' : 'nada'} 
      form={toggle ? 'form' : 'nada'} 
      
      />
      <div>
        <div className={`card-image mapa_campus`} onClick={handleToggle}>
        </div>
      </div>
    </>
  );
}
