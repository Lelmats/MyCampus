import { useNavigate } from 'react-router-dom';  
import Card from '../components/card';
import 'src/app/styles/app.css';
import Sidebar from "src/app/components/sidebar.jsx";

export default function AdminVerificado() {
  const navigate = useNavigate();  
  function handleClick() {
    navigate('/adminForm');
  }

  return (
    <>
      <Sidebar/>
      <div className="h-auto w-100v my-0 bg-white ">
        <div className="p-8 ml-8 lg:ml-[200px]">
          <h1 className="text-3xl"> <b>Área CTI</b> / Reportes verificados</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-auto lg:grid-cols-3 box-content w-auto p-0 lg:p-4">
              <Card 
                issue="Pantalla dañada - E5"
                image="https://cdn.thewirecutter.com/wp-content/media/2022/11/24inchmonitors-2048px-9977-3x2-1.jpg"
                tipoR = "infraestructura"
                bgColor = "bg-[#026CB5]"
                fecha="02-11-23"
                name="César Amaya"
                description="En el centro de cómputo hay una pantalla con manchas negras."
                onClick={handleClick}
              />
              <Card 
                issue="Vape en los salones"
                image="https://californiahealthline.org/wp-content/uploads/sites/3/2018/06/daley_img_4730-julien-vaping2.jpg"
                tipoR = "Social"
                bgColor = "bg-[#D7920D]"
                fecha="02-11-23"
                name="Juan Pérez"
                description="Los alumnos estan usando los centros de cómputo para usar el vape."
                onClick={handleClick}
              />
              <Card 
                issue="Robo de equipamiento"
                image="https://2.bp.blogspot.com/-s1K7qfxf-II/VfQvD2sdJ0I/AAAAAAAADO8/HAeOetBRt5I/s1600/class1.jpg"
                tipoR = "Otros"
                bgColor = "bg-green-500"
                fecha="02-11-23"
                name="Juan Pérez"
                description="Los alumnos estan usando los centros de cómputo para usar el vape."
                onClick={handleClick}
              />
              <Card 
                issue="Proyector fallando"
                image="https://4.imimg.com/data4/ET/IH/MY-4259580/classroom-projector-250x250.jpg"
                tipoR = "infraestructura"
                bgColor = "bg-[#026CB5]"
                fecha="02-11-23"
                name="Juan Pérez"
                description="Los alumnos estan usando los centros de cómputo para usar el vape."
                onClick={handleClick}
              /> 
          </div>
        </div>
      </div>
    </>
  );
}


