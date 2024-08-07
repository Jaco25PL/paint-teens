
export function Navigation () {

    return (
        <div className="bg-green-400 px-32 py-5 flex justify-between items-center">

            <div>
                <img className="w-52" src="./logo.png" alt="paint-teens logo" />
            </div>

            <div>
                <ul className="flex gap-7 [&_*]:font-bold">
                    <li>HOME</li>
                    <li>QUIENES SOMOS</li>
                    <li>LO QUE HACEMOS</li>
                    <li>NUESTRO TRABAJO</li>
                </ul>
            </div>

            <div>
                <div className="bg-red-500 w-fit px-3 py-2 rounded-md font-bold text-white">
                    <div>094 123 456</div>
                </div>
            </div>
            
        </div>
    )
}