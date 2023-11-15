import React from 'react'
import Card from '../components/card'

export default function index() {
  return (
    <div class="h-auto w-100v my-0 bg-white ">
    <div class="p-8 ml-[200px] ">
          <h1 class="text-3xl"> <b>Área CTI</b> / Lista de reportes</h1>
      <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-auto lg:grid-cols-3 box-content w-auto p-4 ">
          <Card 
          issue="Pantalla dañada - E5"
          image="https://cdn.thewirecutter.com/wp-content/media/2022/11/24inchmonitors-2048px-9977-3x2-1.jpg"
          name="César Amaya"
          description="En el centro de cómputo hay una pantalla con manchas negras."
          />
          <Card 
          issue="Vape en los salones"
          image="https://www.educationcorner.com/wp-content/uploads/featured-classroom-design-layout.jpg"
          name="Juan Pérez"
          description="Los alumnos estan usando los centros de cómputo para usar el vape."
          />
      </div>
    </div>
  </div>
  )
}