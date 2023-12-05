import './filtroEmpleos.css'
import { SubmitHandler, useForm } from "react-hook-form";

export const FiltroEmpleos = (props: any) => {
    interface FiltroEmpleos {
        cargaHoraria: string,
        rubro: string,
        puesto: string
    }


    const { register, getValues, reset } = useForm<FiltroEmpleos>();
    const { buscar }: { buscar: Function } = props;

    /*const onSubmit: SubmitHandler<FiltroEmpleos> = (datos) => {
        buscar(datos);
        reset();
    };*/

    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
            
                <form className='contenedor d-flex flex-row justify-content-center align-items-center' action="search">
                        <label className='label-buscador'>Carga Horaria</label>
                        <select className="fondoBuscadores selector" {...register("cargaHoraria", {
                        onChange: () => {
                            const values = getValues();
                            buscar(values)}
                            })}>
                            <option value="seleccione">Seleccione</option>
                            <option value="partTime">Part Time</option>
                            <option value="fullTime">Full Time</option>
                        </select>

                        <label className='label-buscador'>Puesto</label>
                        <input placeholder='Buscar' className='fondoBuscadores selector' {...register("puesto", {
                        onChange: () => {
                            const values = getValues();
                            buscar(values)}
                            })}></input>

                        <label className='label-buscador'>Rubro</label>
                        <input placeholder='Buscar' className='fondoBuscadores selector' {...register("rubro", {
                        onChange: () => {
                            const values = getValues();
                            buscar(values)}
                            })}></input>
                </form>


            
        </>
    )
}