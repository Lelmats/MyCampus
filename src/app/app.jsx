import Image from 'next/image'

export default function App() {
    return (
      <>
        <div className="flex max-w-[27rem] m-5 px-2 pt-3 pb-2 bg-slate-100 dark:bg-slate-800 dark:text-white justify-center rounded-md border-2 border-black">
          <div className="w-80v">
            <div className='text-center pb-3'>
              <span className='font-bold text-3xl'>MyCampus</span>  
            </div>
            <div className='flex justify-center aspect-w-9 aspect-h-16 overflow-y-auto'>
              <img className='object-cover rounded-md overflow-y-auto' src="https://i.ibb.co/Jm0bffr/ULSAMAP.jpg" alt="UlsaMap" srcset="" />
            </div>
          </div>
        </div>
      </>
    );
  }