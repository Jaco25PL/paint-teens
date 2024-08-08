
export function Header () {

    return (
        <div className="bg-red-700 w-full h-[33rem] m-auto">
            <div className="flex justify-center">

                <div className="absolute top-0 z-0 mx-auto bg-purple-500 w-full max-h-[42rem] overflow-hidden flex justify-center items-center">
                    <img className="w-full" src="./team.jpg" alt="Equipo de paint teens" />
                </div>

                <div className="[&_div]:font-bold relative z-20">
                    <div className="text-7xl mt-20 mb-40">SERVICIOS DE <span className="text-red-500 font-extrabold">PINTURA</span></div>

                    <div className="[&_*]:bg-red-600 [&_*]:text-4xl [&_*]:text-white [&_*]:p-5 [&_*]:mx-5 [&_*]:rounded-lg  mx-auto w-max">  
                        <button>Contactanos</button>
                        <button>Presupuesto</button>
                    </div>
                </div>

            </div>
        </div>
    )
}