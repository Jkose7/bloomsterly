import { Layaout } from "../../components/templates/Layaout";
import { FirtsTitle, Titles } from "../../components/titles/Title";
import { Menudiag } from "./menuDiag";
import { DataTable } from "./DataTable"
import { Solicitud } from "./Solicitud";
import { Modalsol } from "./modalSol";
import { ModalUsu } from "./modalUsu";
export function Administrador({ user="Silvana" }) {
  return (
    <>
      {/* <Menudiag></Menudiag> */}
      <div className="flex flex-row justify-between">
        <div>
          <Menudiag></Menudiag>
        </div>
        <div>
          <Solicitud></Solicitud>
          {/* <DataTable></DataTable> */}
        </div>
      </div>
      {/* <ModalUsu></ModalUsu> */}
      {/* <Modalsol></Modalsol> */}
      {/* <DataTable/> */}
      {/* <FirtsTitle title="Administrador" descripcion={`Bienvenid@ ${user}`} /> */}
    </>
  );
}