import './filtroEmpleos.css'
export const FiltroEmpleos = () => {
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
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
<<<<<<< HEAD
                                <div className="buscar">
                                    <input type="text" placeholder='buscar' required />
                                    <div className='btn'>
                                        <i className='fa fa-search'></i>
                                    </div>
                                </div>
=======
                                <input id="letraBuscador" className="fondoBuscadores buscador" type="search" placeholder="Buscar" aria-label="Search" />
>>>>>>> develop
                            </form>
                        </th>
                    </tr>
                </table>
            </div >
        </>
    )
}