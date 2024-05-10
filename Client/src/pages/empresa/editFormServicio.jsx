import { useToastify } from "../../components/hooks/useToastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const EditarFormServicio = () => {
  const { showToastMessage } = useToastify();
  const navegate = useNavigate();
  const [servicio, setServicio] = useState([]);
  const [imagenes, setImagenes] = useState([])
  const {id} = useParams();
  useEffect(() => {
    cargarDatosServicio();
  },[]);
  const token = localStorage.getItem("token")
  const cargarDatosServicio = async () => {
    try {
      const respuesta = await axios.post(`http://localhost:8000/empresa/servicio`,{id},
      {
          headers:{
            Authorization:token
          }
        }
      );
      setServicio(respuesta.data);
    } catch (error) {
      showToastMessage("Error al cargar los datos del servicio");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const capturarImagenes= (event)=>{
    const files = event.target.files;
    setImagenes(files)
    console.log(imagenes);
  }
  const onSubmit = async (data) => {
    try {
        let nombre, descripcion, valor_servicio, COD_subCategoria;
        if (data.nombre === "") {
          nombre = servicio.nombre;
        } else {
          nombre = data.nombre;
        }
        if (data.descripcion === "") {
          descripcion = servicio.descripcion;
        } else {
          descripcion = data.descripcion;
        }
        if (data.valor_servicio === "") {
          valor_servicio = servicio.valor_servicio;
        } else {
          valor_servicio = data.valor_servicio;
        }
        if (data.COD_subCategoria === "") {
          COD_subCategoria = servicio.COD_subCategoria;
        } else {
          COD_subCategoria = data.COD_subCategoria;
        }
        const formData = new FormData();
        formData.append('ID', servicio.ID)
        formData.append('nombre', nombre)
        formData.append('descripcion', descripcion)
        formData.append('valor_servicio', valor_servicio)
        formData.append('COD_subCategoria', COD_subCategoria)
        for (let i=0; i<imagenes.length; i++){
          formData.append('imagenes', imagenes[i])
        }

      const token = localStorage.getItem("token");
      const respuesta = await axios.post(`http://localhost:8000/empresa/editarServicio`, formData, {
        headers: {
          Authorization: token
        },
      });
      showToastMessage(respuesta.data.message);
      navegate(`/empresa/servicios`);
    } catch (error) {
      showToastMessage("Hubo un error al editar el servicio");
    }
  };

  return (
    <>
      <div
        className="h-full w-full bg-dark_theme dark:bg-second_color_lt text-white  p-10 shadow-xl shadow-[#4e1ba1]
        flex flex-col gap-9 mt-10 dark:shadow-[#d91e4e] z-10"
      >
        <div>
          <Link to="/empresa/servicios">
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </Link>
          <h1 className="font-bloomsterly text-white text-9xl text-center ">
            Editar Servicios
          </h1>
          <p className="text-balance text-center font-text text-xl ">
            A través de este formulario podras editar tu servicio seleccionado
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            className="w-[90%] text-base minicel:text-sm sm:text-lg md:text-xl  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full gap-4">
            </div>

            <div className="input-box animation flex flex-col w-full">
              {/* Campo para Nombre */}
              <label htmlFor="nombre" className="font-bold">
                Nombre
              </label>
              <input
                type="text"
                {...register("nombre", {
                  required: false,
                })}
                defaultValue={servicio. nombre}
                className="focus:outline-none bg-transparent border-b-2 dark:border-white"
              />
              {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>

            <div className="input-box animation flex flex-col w-full">
              {/* Campo para Descripción */}
              <label htmlFor="descripcion" className="font-bold">
                Descripción
              </label>
              <textarea
                {...register("descripcion", {
                  required: false,
                })}
                defaultValue={servicio.descripcion}
                className="w-full font-titulos dark:text-primary-color text-second-color pb-2 pr-3 mr-2 border-b-2 border-r-2 border-second-color dark:border-white bg-transparent focus:outline-none resize-none"
              />
              {errors.descripcion && <span>{errors.descripcion.message}</span>}
            </div>

            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full ">
                {/* Campo para Valor del Servicio */}
                <label htmlFor="valor_servicio" className="font-bold">
                  Valor del Servicio
                </label>
                <input
                  type="number"
                  {...register("valor_servicio", {
                    required: false,
                  })}
                  defaultValue={servicio.valor_servicio}
                  className="focus:outline-none bg-transparent border-b-2 dark:border-white"
                />
                {errors.valor_servicio && (
                  <span>{errors.valor_servicio.message}</span>
                )}
              </div>
            </div>

            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full">
                {/* Campo para Código de Subcategoría */}
                <div className="flex flex-col w-full ">
                  <label htmlFor="COD_subCategoria" className="font-bold">
                    Código Subcategoría
                  </label>
                  <select
                    className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2 dark:border-white dark:text-white"
                    {...register("COD_subCategoria")}
                  >
                    <option
                      value=""
                      disabled
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Subcategoría
                    </option>
                    <option
                      value="1"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Mariachis
                    </option>
                    <option
                      value="2"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Música Electrónica
                    </option>
                    <option
                      value="3"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Decoración Infantil
                    </option>
                    <option
                      value="4"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Decoración Matrimonial
                    </option>
                    <option
                      value="5"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Decoración de Quinces
                    </option>
                    <option
                      value="6"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Buffet Mexicano
                    </option>
                    <option
                      value="7"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Catering Gourmet
                    </option>
                    <option
                      value="8"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Cócteles Clásicos
                    </option>
                    <option
                      value="9"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Cócteles Exóticos
                    </option>
                    <option
                      value="10"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Intendencia para bodas
                    </option>
                    <option
                      value="11"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Intendencia para 15 años
                    </option>
                    <option
                      value="12"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Meceros
                    </option>
                    <option
                      value="13"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Seguridad
                    </option>
                    <option
                      value="14"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Fincas
                    </option>
                    <option
                      value="15"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Salones
                    </option>
                    <option
                      value="16"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Músicos independientes
                    </option>
                    <option
                      value="17"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Entretenimiento infantil
                    </option>
                    <option
                      value="18"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Fotografía profesional
                    </option>
                    <option
                      value="19"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Retrato
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="input-box animation flex flex-col w-full">
                {/* Campo para Imagen */}
                <label htmlFor="imagen" className="font-bold">
                  Imagen
                </label>
                <div className="mt-4 mb-4">
                  <label
                    htmlFor="imagen"
                    className=" cursor-pointer bg-white dark:bg-white border border-gray-300  rounded-lg py-2 px-4 text-sm text-gray-700 hover:text-white dark:text-second_color_lt dark:hover:text-white hover:bg-admin_card  dark:hover:bg-[#eb2651] transition-all duration-300"
                  >
                    Seleccionar archivo
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      {...register("imagen", {
                        required: "Este campo es requerido",
                      })}
                      onChange={capturarImagenes}
                      className="hidden"
                      id="imagen"
                    />
                  </label>
                </div>
                {errors.imagen && <span>{errors.imagen.message}</span>}
              </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="text-white mt-2 bg-color_switch_theme_dark w-full p-1 rounded-md hover:bg-[#8e5ee0]
              minicel:text-sm celular:text-base sm:text-lg md:text-xl  
              minicel:mt-3 sm:mt-6 dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
            >
              Editar servicio
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
