// importación de los componentes cuando ya se puedan utilizar 
import { useThemeContext } from "../../../components/providers/themeProvider";
import { ButtonAdmin } from "../../../components/buttons/buttonAdmin";
import { IconUser } from "../../administrador/templates/iconUser";


export function LateralMenu(){

    return(
        <div className="flex flex-col w-auto rounded-lg bg-admin_card items-center dark:bg-light_theme p-[2vh]">
            <div>
                <IconUser/>
            </div>
            <h2 className="text-white text-2xl dark:text-second_color_lt">@Empresa</h2>
            <ButtonAdmin href="/empresa/reserva">Clientes</ButtonAdmin>
            <ButtonAdmin href="/empresa/servicios">Servicios</ButtonAdmin>
            <ButtonAdmin href="/empresa/perfil">Modificar</ButtonAdmin> 
        </div>
    )
}