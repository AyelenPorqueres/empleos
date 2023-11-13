import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { CardCandidatos } from "../../componentes/cardCandidatos/cardsCandidatos"
import { CardContainer } from "../../componentes/cardContainer/cardContainer"
// import { datosEmpleos } from "../../services/datosEmpleos"
import { datosCandidatos } from "@/app/services/datosCandidatos"
import CargarCv from "@/app/componentes/cargarCV/cargarCv"
import './page.css'
import { FiltroCandidatos } from "@/app/componentes/filtroCandidatos/filtroCandidatos"

export default function Home() {
  return (
    <>
      <header>
        <div className="d-flex flex-row align-items-center nav-logo">
          <Logo></Logo>
          <Nav></Nav>
        </div>
        <FiltroCandidatos></FiltroCandidatos>
      </header>
      <main>
        <CargarCv></CargarCv>
        <CardContainer>
          <CardCandidatos datos={datosCandidatos}></CardCandidatos>
        </CardContainer>
      </main>
    </>
  )
}
