import './filtroCandidatos.css'
import { SubmitHandler, useForm } from "react-hook-form";
 export const FiltroCandidatos = (props: any) => {

 
interface FiltroCandidatos {
    nombreCompleto: string,
    edad: string,
    infoExtraUno: string,
    infoExtraDos: string,

}

    const {register, getValues, reset} = useForm<FiltroCandidatos>();
    const {buscar}: {buscar: Function} = props;
    
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <form className="contenedor d-flex flex-row justify-content-center align-items-center" action="search" /*onChange={handleSubmit(onChange)}*/>
                <label>
                    <input placeholder='Buscar' className="fondoBuscadores selector" {...register("nombreCompleto", {
                        onChange: () => {
                            const values = getValues();
                            buscar(values)}
                    })} ></input>
                </label>

                <label>
                <select className="fondoBuscadores selector" {...register("edad", {
                        onChange: () => {
                            const values = getValues();
                            buscar(values)}
                            })}>
                        <option value="seleccione">Edad...</option>
                        <option value="18-25">18-25</option>
                        <option value="26-33">26-33</option>
                        <option value="34-41">34-41</option>
                        <option value="42-49">42-49</option>
                        <option value="50-57">50-57</option>
                        <option value="58-65">58-65</option>
                    </select>
                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("infoExtraUno", {
                        onChange: () => {
                            const values = getValues();
                            buscar(values)}
                        })} >
                        <option value="seleccioneCargaHoraria">Carga Horaria...</option>
                        <option value="partTime">Part-Time</option>
                        <option value="fullTime">Full-Time</option>
                    </select>

                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("infoExtraDos", {
                        onChange: () => {
                            const values = getValues();
                        buscar(values)}
                    })}>
                        <option value="seleccioneMovilidad">Movilidad...</option>
                        <option value="movilidadSi">Si</option>
                        <option value="movilidadNo">No</option>
                    </select>

                </label>


                
                

            </form>


        </>
    )
}
/*<div className="buscar">

<input id='letraBuscador' className='aver' type="text" placeholder='buscar' {...register("value")} />
<button id='submitNo' className='botonEnviarSubmit' type="submit" >
    <i className='fa fa-search' ></i>
</button>

</div>*/