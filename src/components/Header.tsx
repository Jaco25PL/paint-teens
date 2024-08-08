
export function Header () {

    return (
        <div className="bg-red-700 w-full h-[33rem] flex justify-center items-center">
            <div className="flex justify-center">

                <div className="absolute top-0 z-0 mx-auto bg-purple-500 w-full max-h-[42rem] overflow-hidden flex justify-center items-center">
                    <img className="w-full" src="./team.jpg" alt="Equipo de paint teens" />
                </div>

                <div className="relative z-20">
                    <div>Header Title</div>

                    <div className="[&_*]:bg-red-600">  
                        <button>Contactanos</button>
                        <button>Presupuesto</button>
                    </div>
                </div>

            </div>
        </div>
    )
}