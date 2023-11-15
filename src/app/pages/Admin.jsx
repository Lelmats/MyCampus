import Card from '../components/card'
import Sidebar from "src/app/components/sidebar.jsx";
import 'src/app/styles/app.css'; 

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="h-auto w-100v my-0 bg-white ">
        <div className="p-8 ml-8 lg:ml-[200px]">
          <h1 className="text-3xl"> <b>Área CTI</b> / Reportes en proceso</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-auto lg:grid-cols-3 box-content w-auto p-0 lg:p-4">
              <Card 
              issue="Pantalla dañada - E5"
              image="https://cdn.thewirecutter.com/wp-content/media/2022/11/24inchmonitors-2048px-9977-3x2-1.jpg"
              fecha="02-11-23"
              name="César Amaya"
              description="En el centro de cómputo hay una pantalla con manchas negras."
              />
              <Card 
              issue="Vape en los salones"
              image="https://www.educationcorner.com/wp-content/uploads/featured-classroom-design-layout.jpg"
              fecha="02-11-23"
              name="Juan Pérez"
              description="Los alumnos estan usando los centros de cómputo para usar el vape."
              />
              <Card 
              issue="Vape en los salones"
              image="https://www.educationcorner.com/wp-content/uploads/featured-classroom-design-layout.jpg"
              fecha="02-11-23"
              name="Juan Pérez"
              description="Los alumnos estan usando los centros de cómputo para usar el vape."
              />
              <Card 
              issue="Vape en los salones"
              image="https://www.educationcorner.com/wp-content/uploads/featured-classroom-design-layout.jpg"
              fecha="02-11-23"
              name="Juan Pérez"
              description="Los alumnos estan usando los centros de cómputo para usar el vape."
              />
          </div>
        </div>
      </div>
    </>
  )
}