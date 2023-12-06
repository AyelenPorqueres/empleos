import { useState } from "react";
import "./filtroCandidatos.css";
import { SubmitHandler, useForm } from "react-hook-form";
export const FiltroCandidatos = (props: any) => {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);  
  const [icono, setIcono] = useState('bi-chevron-down');  
  interface FiltroCandidatos {
    nombreCompleto: string;
    edad: string;
    infoExtraUno: string;
    infoExtraDos: string;
  }

  const { register, getValues, reset } = useForm<FiltroCandidatos>();
  const { buscar }: { buscar: Function } = props;

  return (
    <>
       <div className='contenedor d-flex flex-column justify-content-center align-items-center'>
            <a className='filter'
                onClick={() => {
                    if (mostrarFiltro) {
                        setMostrarFiltro(false)
                        setIcono('bi-chevron-down')
                    }
                    else {
                        setMostrarFiltro(true)
                        setIcono('bi-chevron-up')
                    }
                }}
            > Filtrar <i className={`bi ${icono}`}></i></a>

    {mostrarFiltro &&
      <form
        className=" d-flex flex-row flex-wrap justify-content-center align-items-center"
        action="search">
            
        <div>
          <label className="labelFiltro">Nombre completo</label>
          <input
            placeholder="Buscar"
            className="fondoBuscadores selector"
            {...register("nombreCompleto", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          ></input>
        </div>

        <div>
          <label className="labelFiltro">Edad</label>
          <select
            className="fondoBuscadores selector"
            {...register("edad", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          >
            <option value="seleccione">Seleccione...</option>
            <option value="18-25">18-25</option>
            <option value="26-33">26-33</option>
            <option value="34-41">34-41</option>
            <option value="42-49">42-49</option>
            <option value="50-57">50-57</option>
            <option value="58-65">58-65</option>
          </select>
        </div>

        <div>
          <label className="labelFiltro">Carga Horaria</label>

          <select
            className="fondoBuscadores selector"
            {...register("infoExtraUno", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          >
            <option value="seleccioneCargaHoraria">Seleccione...</option>
            <option value="partTime">Part-Time</option>
            <option value="fullTime">Full-Time</option>
          </select>
        </div>

        <div>
          <label className="labelFiltro">Movilidad</label>

          <select
            className="fondoBuscadores selector"
            {...register("infoExtraDos", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          >
            <option value="seleccioneMovilidad">Seleccione...</option>
            <option value="movilidadSi">Si</option>
            <option value="movilidadNo">No</option>
          </select>
        </div>
      </form>}
      </div>
    </>
  );
};
