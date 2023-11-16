import { LuNewspaper } from "react-icons/lu";
import { MdOutlineVerified, MdOutlineAccessTime  } from "react-icons/md";
import { Link } from "react-router-dom";

export default function sidebar(props) {
  return (
    <>
        <div class="shadow fixed flex flex-col hidden lg:flex w-[200px] h-100v overflow-hidden text-gray-700 bg-gray-100 " id={props.classe}>
            <a class="flex w-full mt-3 justify-center" href="#">
                <img src="https://i.ibb.co/SPYMz8K/My-Campus-Logo2.png" alt="My-Campus-Logo2" className='w-20v'/>
            </a>
            <a className="flex w-full py-4 justify-center border-t-2" id={props.name}>
                <Link to="/user" class="flex items-center gap-4 mx-4">
                    <img class="h-[45px] rounded-full" src="https://yt3.ggpht.com/OTQq_1COYbZ1vY9sBj7Z4Ki1Q0iYRDsMSPjDtIxD2iS-jaUbvOsfhB7p7-mIg_LjGX9YkNjM-A=s108-c-k-c0x00ffffff-no-rj" alt=""/>
                    <div class="font-medium dark:text-white">
                        <div>Max Rivera</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Administrador</div>
                    </div>
                </Link>
            </a>
            <div class="w-full">
                <div className="flex flex-col border-t border-gray-300">
                        <Link to="/admin" className="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white items-center">
                            <LuNewspaper  className="text-xl" />
                            <span className="ml-2 align-middle text-[16px] font-semibold" >Reportes</span>
                        </Link>
                        <Link to="/adminPro" className="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white items-center">
                            <MdOutlineAccessTime  className="text-xl" />
                            <span className="ml-2 align-middle text-[16px] font-semibold" >En proceso</span>
                        </Link>
                        <Link to="/adminVer" className="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white items-center">
                            <MdOutlineVerified  className="text-xl" />
                            <span className="ml-2 align-middle text-[16px] font-semibold" >Verificados</span>
                        </Link>

                </div>
            </div>
            <a class="flex items-center justify-center w-full h-16 mt-auto border-t-2 py-7 hover:bg-gray-300" href="#">
                <span class="text-sm font-medium">© MyCampus, 2023</span>
            </a>
        </div>
    </>
  )
}
