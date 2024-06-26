import { Link } from "react-router-dom"
import { useUserContext } from '../providers/userProvider'
import { useReservaUserCrudContext } from "../providers/reservasUserProvider"


export function ServiciosCard({ nombre, descripcion, valor, img, addServicioSeleccionado }) {

    return (
        <article className="flex  p-3 text-white w-full gap-2 z-10">
            <div className="bg-purple-700 w-1/3 flex dark:bg-second_color_lt " >
                <img src={img ? `http://localhost:8000/user/servicios/${img}` : ""} alt="" />
            </div>
            <div className="flex flex-col font-text font-medium  w-2/3 dark:text-black">
                <div>
                    <h1>{nombre}</h1>
                    <p className="text-xl ">{descripcion}</p>
                    <h2 className="text-lg">{valor}</h2>
                </div>
                <div className="flex justify-end">

                    <button
                        onClick={addServicioSeleccionado}
                        className="text-center  w-1/4 rounded-sm bg-purple-700 border-2 border-transparent hover:bg-transparent hover:border-purple-700 dark:bg-second_color_lt dark:text-white dark:hover:bg-transparent dark:hover:text-second_color_lt dark:border-2 dark:border-transparent dark:hover:border-second_color_lt">
                        Reservar
                    </button>
                </div>
            </div>
        </article>
    )
}