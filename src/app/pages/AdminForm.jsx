import Sidebar from "src/app/components/sidebar.jsx";

export default function AdminForm(props) {
  return (
    <>
     <Sidebar/>
      <div className="h-auto w-100v my-0 bg-white ">
        <div className="p-8 ml-8 lg:ml-[200px]">
          <div className=" box-content w-auto p-0 lg:p-4">
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl lg:text-3xl"><b>Pantalla dañada</b> - E5</h1>
              <div className="ml-auto bg-[#026CB5] text-white min-w-fit p-2 text-center rounded-xl">Infraestructura</div>
            </div>
            <br />
            <hr />
            <div className="grid grid-cols-2 mt-5">
              <h1 className="text-3xl lg:text-2xl"><b>Ana Soto</b> 
              
              <p className="text-xl mt-5 pr-20 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo sit amet velit dignissim gravida. Maecenas volutpat vehicula sem, ut cursus orci aliquet a. Suspendisse potenti. Aenean auctor justo a neque sagittis, sit amet consequat dui rhoncus. Sed eget nisl vestibulum, rhoncus quam vel, blandit elit. Fusce vehicula augue vitae nibh fringilla, eu convallis purus ultrices. Quisque malesuada mi sed libero pellentesque, at venenatis urna venenatis. Integer sed hendrerit justo. Nulla facilisi. Proin et dui non neque laoreet facilisis ut eu metus.
              </p>
              </h1>
              <img className="rounded-2xl" src="https://www.educationcorner.com/wp-content/uploads/featured-classroom-design-layout.jpg" alt="" />
            </div>
            <div className="grid grid-cols-3 mt-16 text-center text-white">
              <div className="min-w-fit bg-red-500 py-3 font-bold	rounded-l-lg hover:bg-red-600">No Válido</div>
              <div className="min-w-fit bg-[#2479b1] py-3 font-bold hover:bg-[#026CB5]">En proceso</div>
              <div className="min-w-fit bg-green-400 py-3 font-bold	rounded-r-lg hover:bg-green-500">Validado</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
