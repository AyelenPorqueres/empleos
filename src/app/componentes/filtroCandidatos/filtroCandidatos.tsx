import './filtroCandidatos.css'
export const FiltroCandidatos = () => {
    return (
        <div className="contenedor">
            <table>
                <tr>
                    <label>
                        <select className="fondoBuscadores selector" name="" id="">

                            <option >Nombre/Apellido</option>
                            <option >Edad</option>
                            <option >Full-Time</option>
                            <option >Movilidad</option>

                        </select>
                    </label>

                    <th>
                        <form action="search">
                            <div className="buscar">
                                <input type="text" placeholder='buscar' required />
                                <div className='btn'>
                                    <i className='fa fa-search'></i>
                                </div>
                            </div>
                        </form>
                    </th>
                </tr>
            </table>
        </div >
    )
}
