import { FaRegMap } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { RiNewspaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function sidebarUser(props) {

    return (
    <>
        <div className="shadow fixed flex flex-col hidden lg:flex w-[200px] h-100v overflow-hidden text-gray-700 bg-gray-100 " id={props.classe}>
            <a className="flex w-full mt-3 justify-center" href="#">
                <img src="https://i.ibb.co/SPYMz8K/My-Campus-Logo2.png" alt="My-Campus-Logo2" className='w-20v'/>
            </a>
            <a className="flex w-full py-4 justify-center border-t-2" id={props.name}>
                <Link to="/admin" class="flex items-center gap-4 mx-4">
                    <img class="h-[45px] rounded-full" src="https://yt3.ggpht.com/OTQq_1COYbZ1vY9sBj7Z4Ki1Q0iYRDsMSPjDtIxD2iS-jaUbvOsfhB7p7-mIg_LjGX9YkNjM-A=s108-c-k-c0x00ffffff-no-rj" alt=""/>
                    <div class="font-medium dark:text-white">
                        <div>Max Rivera</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Usuario</div>
                    </div>
                </Link>
            </a>
            <div className="hidden flex items-center justify-center border-t-2 " id={props.form}>
                <div class="container max-w-screen-lg mx-auto">
                    <div class="flex justify-center items-center w-screen h-screen">
                        <div class="container mx-auto my-4 px-4 lg:px-10">
                        <h1 class="font-bold text-3xl">Formulario de reportes</h1>
                            <div class="w-full pt-8 mt-4 md:px-6 lg:w-55v lg:pl-10 lg:pr-10 mr-auto">
                                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 0">
                                    <label> <b>Nombre</b> </label>
                                    <label> <b>Tipo de reporte</b> </label>
                                </div>
                                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-2">
                                    <input class="w-full bg-gray-100 border-gray-400 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Max Alejandro Rivera Higuera" />
                                    <select id="tipoReporte" name="tipoReporte" form="tipoReporteForm" class="w-full bg-gray-100 text-gray-900 border-gray-400 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Seasd">
                                        <option value="infraestructura">Infraestructura</option>
                                        <option value="social">Social</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div class="grid mt-2">
                                    <label className="mt-2"> <b>Descripcion</b> </label>
                                    <textarea  className="w-full resize-y mt-2 bg-gray-100 text-gray-900 p-3 rounded-lg border-gray-400 focus:outline-none focus:shadow-outline "
                                    type="text" placeholder="Descripcion" />
                                </div>
                                <div class="py-20 px-2 mt-6 flex items-center justify-center border-2 border-gray-400 hover:bg-gray-200 hover:text-gray-500 rounded-md">
                                    <div class="max-w-md rounded-lg overflow-hidden md:max-w-xl">
                                        <div class="md:flex">
                                            <div class="w-full p-10">
                                                <div class="flex relative h-48 rounded-lg  justify-center items-center">
                                                    <div class="absolute flex items-center">
                                                        <div class="flex flex-col items-center">
                                                            <FaCloudArrowDown className="text-9xl"/>    
                                                        </div>
                                                    </div>
                                                    <input type="file" class="h-auto w-full opacity-0" name=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-2 w-1/2 lg:w-1/4 items-center flex justify-center mt-7 mb-0 ">
                                    <button href="../pages/User" class="uppercase text-sm font-bold tracking-wide bg-blue-800 hover:bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Enviar Reporte
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full" id={props.list}>
                <div className="flex flex-col border-t border-gray-300">
                    <Link to="/user" className="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white items-center" href="#">
                    <FaRegMap className="text-xl" />
                    <span className="ml-2 align-middle text-[16px] font-semibold">Mapa del campus</span>
                    </Link>
                    <Link to="/userHist" className="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white items-center" href="#">
                    <RiNewspaperLine className="text-xl"/>
                    <span className="ml-2 align-middle text-[16px] font-semibold">Historial reportes</span>
                    </Link>

                </div>
            </div>
            <a className="flex items-center justify-center w-full h-16 mt-auto border-t-2 py-7 hover:bg-gray-300" href="#">

                <span className="text-sm font-medium">© MyCampus, 2023</span>
            </a>
        </div>

    </>
  )
}
