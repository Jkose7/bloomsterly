import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
import { useEmpresaContext } from "../../components/providers/empresaProvider";
import { ServiciosReserva } from "./templates/serviciosReserva";

export function PerfilEmpresa() {

    const empresas = useEmpresaContext()

    const NIT = "e111";
    const empresaSelec = empresas.find(empresa => empresa.id === NIT)
    console.log(empresaSelec)

    const servicios = ["sv001", "sv100", "sv010"]

    return (
        <>
            <div>
                <ButtonAdmin>Editar Datos</ButtonAdmin>
            </div>
            <section className="flex flex-col w-[97.5%] items-center mb-[2vh]">
                <div className="mb-[3vh]">
                    <IconUser/>
                    <h2 className="text-white text-2xl dark:text-second_color_lt">{empresaSelec.nombre}</h2>
                </div>
                <div className="w-[100%] bg-color_font_dark text-center p-[3vh] rounded-[2vh] dark:bg-light_theme">
                    <p className="text-white dark:text-second_color_lt">{empresaSelec.descripcion}</p>
                </div>
            </section>
            <ServiciosReserva servicios={servicios}/>
        </>
    )
}