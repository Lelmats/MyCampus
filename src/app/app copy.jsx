import { useEffect, useState } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
    return (
      <>
        <div className='flex mx-5'>
          {/* <div className='flex max-w-[5rem] my-5 w-40v bg-slate-400 rounded-md border-2 border-black'>
          </div> */}
          <div className="flex max-w-[27rem] m-5 px-2 pt-3 pb-2 bg-slate-100 dark:bg-slate-800 dark:text-white justify-center rounded-md border-2 border-black">
            <div className="w-80v">
              <div className='text-center pb-3'>
                <span className='font-bold text-2xl'>MyCampus </span>  
                <span className="text-2xl" id="pin_data"></span>
              </div>
              <div className='flex justify-center aspect-w-9 aspect-h-16 overflow-y-auto'>
                <img id="map_campus" className='object-cover rounded-md overflow-y-auto' src="https://i.ibb.co/Jm0bffr/ULSAMAP.jpg" alt="UlsaMap" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }