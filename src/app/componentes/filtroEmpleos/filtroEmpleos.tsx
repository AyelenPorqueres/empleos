import './filtroEmpleos.css'
import { datosEmpleos } from '@/app/services/datosEmpleos'
export const FiltroEmpleos = (props: any) => {

    const cargaHoraria = [(datosEmpleos.filter(articulo => articulo.cargaHoraria))];
    const rubro = [(datosEmpleos.filter(articulo => articulo.rubro))];
    const puesto = [(datosEmpleos.filter(articulo => articulo.puesto))];

    const { buscar }: { buscar: Function } = props;


    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
            <div className="contenedor">
                <table>
                    <tr>
                        <label className="">
                            <select className="fondoBuscadores selector" name="" id="">
                                <option value="cargaHoraria">Carga Horaria</option>
                                <option value="rubro">Rubro</option>
                                <option value="puesto">Puesto</option>
                            </select>
                        </label>

                        <th>
                            <form action="search">
                                <div className="buscar">
                                    <input type="text" placeholder='buscar' required />
                                    <div className='btn btn-filtro'>
                                        <i onClick={() => buscar()} className='fa fa-search'></i>
                                    </div>
                                </div>
                            </form>
                        </th>
                    </tr>
                </table>
            </div >
        </>
    )
}