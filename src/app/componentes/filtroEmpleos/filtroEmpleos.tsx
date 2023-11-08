import './filtroEmpleos.css'
export const FiltroEmpleos = () => {
    return (
        
            <div className="contenedor">
                <table>
                    <tr>
                        <label className="">
                            <select className="fondoBuscadores selector" name="" id="">
                                <option value="">Carga Horaria</option>
                                <option value="">Rubro</option>
                                <option value="">Puesto</option>
                            </select>
                        </label>

                        <th>
                            <form action="search">
                                <input id="letraBuscador" className="fondoBuscadores buscador" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </th>
                    </tr>
                </table>
            </div >
        
    )
}