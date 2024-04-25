import { Route, Routes } from "react-router-dom";
import { Index_empresa } from "./indexEmpresa";
import { LateralMenu } from "./templates/lateralMenu";
import { ReservasCliente } from "./reservasClientes";

import { ReservaDescrip } from "./reservaDescrip";
import { ReservasProvider } from "./provider/reservasProvider";
import { ServiciosEmpresa } from "./serviciosEmpresa";
import { PerfilEmpresa } from "./perfilEmpresa";

export function Empresa(){

    return(
        <section className="flex justify-between z-10">
            <div className="w-full">
                <ReservasProvider>
                    <Routes>
                        <Route path="/" element={<Index_empresa />}></Route>
                        <Route path="/reserva" element={<ReservasCliente/>}></Route>
                        <Route path="/reserva/reservaDescrip/:id" element={<ReservaDescrip />}></Route>

                        <Route path="/servicios" element={<ServiciosEmpresa/>}></Route>

                        <Route path="/perfil" element={<PerfilEmpresa/>}></Route>
                    </Routes>
                </ReservasProvider>
            </div>
        </section>
    )
}