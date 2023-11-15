export default function sidebar() {
  return (
    <> 
        <div class=" shadow fixed flex flex-col w-[200px] h-100v overflow-hidden text-gray-700 bg-gray-100 ">
            <a class="flex w-full mt-3 justify-center" href="#">
                <img src="https://i.ibb.co/SPYMz8K/My-Campus-Logo2.png" alt="My-Campus-Logo2" className=' w-20v '/>
            </a>
            <a class="flex w-full py-4 justify-center border-t-2" href="#">
                <b>Max Rivera</b>
            </a>
            <div class="w-full">
                <div class="flex flex-col border-t border-gray-300">
                    <a class="flex w-full h-12 p-3  hover:bg-[#026CB5] hover:text-white" href="#">
                        <span class="ml-2 align-middle text-[14px] font-semibold ">Reportes</span>
                    </a>
                    <a class="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white" href="#">
                        <span class="ml-2 align-middle text-[14px] font-semibold ">En proceso</span>
                    </a>
                    <a class="flex w-full h-12 p-3 hover:bg-[#026CB5] hover:text-white" href="#">
                        <span class="ml-2 align-middle text-[14px] font-semibold ">Verificado</span>
                    </a>
                </div>
            </div>
            <a class="flex items-center justify-center w-full h-16 mt-auto border-t-2 py-7 hover:bg-gray-300" href="#">

                <span class="text-sm font-medium">© MyCampus, 2023</span>
            </a>
        </div>
    </>
  )
}
