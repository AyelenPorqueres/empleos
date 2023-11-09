import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { CardCandidatos } from "../../componentes/cardCandidatos/cardsCandidatos"
import { CardContainer } from "../../componentes/cardContainer/cardContainer"
// import { datosEmpleos } from "../../services/datosEmpleos"
import { datosCandidatos } from "@/app/services/datosCandidatos"
import CargarCv from "@/app/componentes/cargarCV/cargarCv"

export default function Home() {
  return (
    <>
      <header>
        <Logo></Logo>
        <Nav></Nav>

      </header>
      <main>
        <CargarCv/>
        <CardContainer>
        <CardCandidatos datos={datosCandidatos}></CardCandidatos>
        </CardContainer>
      </main>
    </>
  )
}
