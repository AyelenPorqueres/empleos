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
                            <input id="letraBuscador" className="fondoBuscadores buscador" type="search" placeholder="Search" aria-label="Search" />
                            <img src="" alt="" />
                        </form>
                    </th>
                </tr>
            </table>
        </div >
    )
}