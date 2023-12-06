import { useState } from "react";
import "./filtroEmpleos.css";
import { SubmitHandler, useForm } from "react-hook-form";

export const FiltroEmpleos = (props: any) => {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);  
  const [icono, setIcono] = useState('bi-chevron-down');  
  interface FiltroEmpleos {
    cargaHoraria: string;
    rubro: string;
    puesto: string;
  }

  const { register, getValues, reset } = useForm<FiltroEmpleos>();
  const { buscar }: { buscar: Function } = props;

  return (
    <>
   <div className='contenedor d-flex flex-column  align-items-center'>
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
        className="d-flex flex-wrap justify-content-center align-items-center"
        action="search"
      >
        <div>
          <label className="labelBuscador">Carga Horaria</label>
          <select
            className="fondoBuscadores selector"
            {...register("cargaHoraria", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          >
            <option value="seleccione">Seleccione</option>
            <option value="partTime">Part Time</option>
            <option value="fullTime">Full Time</option>
          </select>
        </div>

        <div>
          <label className="labelBuscador">Puesto</label>
          <input
            placeholder="Buscar"
            className="fondoBuscadores selector"
            {...register("puesto", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          ></input>
        </div>

        <div>
          <label className="labelBuscador">Rubro</label>
          <input
            placeholder="Buscar"
            className="fondoBuscadores selector"
            {...register("rubro", {
              onChange: () => {
                const values = getValues();
                buscar(values);
              },
            })}
          ></input>
        </div>
      </form>}
      </div>
    </>
  );
};
