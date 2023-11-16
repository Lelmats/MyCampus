
export default function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="shadow relative bg-[url('https://i.ibb.co/t2MS0cN/Fondo-Deco.png')] bg-cover w-50v h-100v shadow-sm flex h-screen">
        <div className=" my-auto ml-20 ">
          <h1 className="text-white text-[48px] font-bold  pr-10 border-b-2 border-white max-w-fit align-middle lg:text-[64px]">¡Bienvenido!</h1>
          <h1 className="text-white text-[16px] font-light mt-6 max-w-fit lg:text-[32px]">La <b>mejor</b> manera de</h1>
          <h1 className="text-white text-[16px] font-light max-w-fit lg:text-[32px]"> hacer reportes.</h1>
        </div>
      </div>
      <div className="h-70v w-30v my-auto mx-auto ">
        <img src="https://i.ibb.co/HGfM32C/My-Campus-Logo.png" className="mx-auto w-[55%]" alt="myCampus" />
        <div className="max-w-fit mt-0 mx-auto">
          <div className="relative h-10 w-full ">
            <label className="font-semibold">Matrícula:</label>
            <input className="shadow-lg w-30v mt-3 h-full w-full rounded-[7px] border-1 border-gray-100  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown: placeholder-shown:border-t-blue-gray-200 hover:border-2 hover:border-[#026CB5]  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="text" />
          </div>
        </div>
        <div className="max-w-fit mt-5 mx-auto">
          <div className="relative h-10 w-full ">
            <label className="font-semibold">Constraseña:</label>
            <input className="shadow-lg w-30v mt-3 h-full w-full rounded-[7px] border-1 border-gray-100  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown: placeholder-shown:border-t-blue-gray-200 hover:border-2 hover:border-[#026CB5]  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="text" />
          </div>
        </div>
        <div class="inline-flex items-center mt-5">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              for="login"
              data-ripple-dark="true"
            >
              <input
                id="login"
                type="checkbox"
                class="before:content['']  peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-100 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#026CB5] checked:bg-[#026CB5] checked:before:bg-[#026CB5] hover:before:opacity-10"
              />
              <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              class="mt-px font-light text-gray-700 cursor-pointer select-none"
              for="login"
            >
              Remember Me
            </label>
          </div>
        <div className="shadow-lg max-w-fit mt-10 mx-auto">
            <button className="bg-[#026CB5] max-h-fit max-w-fit px-24 py-2 text-lg text-white rounded-lg font-semibold" >Iniciar Sesión</button>
        </div>
      </div>
    </div>
  )
}
