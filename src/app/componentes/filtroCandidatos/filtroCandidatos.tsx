import './filtroCandidatos.css'
import { SubmitHandler, useForm } from "react-hook-form";
 
interface FiltroCandidatosProps {
    aplicarFiltros: (datos: any) => void;
  }
interface FiltroCandidatosFormData {
    nombreApellido: string,
    edad: string,
    cargaHoraria: string,
    movilidad: string,

}

export const FiltroCandidatos: React.FC<FiltroCandidatosProps> = ({ aplicarFiltros }) => {
    const { register, handleSubmit } = useForm<FiltroCandidatosFormData>();
  
    const onChange: SubmitHandler<FiltroCandidatosFormData> = (data) => {
      aplicarFiltros(data); // Pasar directamente los datos al componente principal
    };
    
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

            <form className="contenedor d-flex flex-row justify-content-center align-items-center" action="search" onChange={handleSubmit(onChange)}>
                <label>
                    <input className="fondoBuscadores selector" {...register("nombreApellido")}>
                        <option value="nombreApellido">Nombre/Apellido</option>
                    </input>
                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("edad")}>
                        <option value="">Edad...</option>
                        <option value="18-25">18-25</option>
                        <option value="26-33">26-33</option>
                        <option value="34-41">34-41</option>
                        <option value="42-49">42-49</option>
                        <option value="50-57">50-57</option>
                        <option value="58-65">58-65</option>
                    </select>
                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("cargaHoraria")}>
                        <option value="">Carga Horaria...</option>
                        <option value="fullTime">Full-Time</option>
                        <option value="partTime">Part-Time</option>
                    </select>

                </label>

                <label>
                    <select className="fondoBuscadores selector" {...register("movilidad")}>
                        <option value="">Movilidad...</option>
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