import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import SidebarUser from "src/app/components/sidebarUser.jsx";
import Card from '../components/card';
import 'src/app/styles/app.css';

export default function UserHist() {
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
      <div className="h-auto w-100v my-0 bg-white ">
        <div className="p-8 ml-8 lg:ml-[200px]">
          <h1 className="text-3xl"> <b>Historial</b> / Reportes</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-auto lg:grid-cols-3 box-content w-auto p-0 lg:p-4">
              <Card 
                issue="Vape en los salones"
                image="https://californiahealthline.org/wp-content/uploads/sites/3/2018/06/daley_img_4730-julien-vaping2.jpg"
                tipoR = "Social"
                bgColor = "bg-[#D7920D]"
                fecha="02-11-23"
                name="Juan Pérez"
                description="Los alumnos estan usando los centros de cómputo para usar el vape."
              />
              <Card 
                issue="Proyector fallando"
                image="https://4.imimg.com/data4/ET/IH/MY-4259580/classroom-projector-250x250.jpg"
                tipoR = "infraestructura"
                bgColor = "bg-[#026CB5]"
                fecha="02-11-23"
                name="Juan Pérez"
                description="Los alumnos estan usando los centros de cómputo para usar el vape."
              /> 
              <Card 
                issue="Robo de equipamiento"
                image="https://2.bp.blogspot.com/-s1K7qfxf-II/VfQvD2sdJ0I/AAAAAAAADO8/HAeOetBRt5I/s1600/class1.jpg"
                tipoR = "Otros"
                bgColor = "bg-green-500"
                fecha="02-11-23"
                name="Juan Pérez"
                description="Los alumnos estan usando los centros de cómputo para usar el vape."
              />
          </div>
        </div>
      </div>
    </>
  );
}


