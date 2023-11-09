import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { CardEmpleos } from "../../componentes/cardEmpleos/cardEmpleos"
import { CardContainer } from "../../componentes/cardContainer/cardContainer"
import { datosEmpleos } from "../../services/datosEmpleos"
import { FiltroEmpleos } from "@/app/componentes/filtroEmpleos/filtroEmpleos"
import './page.css'

export default function Home() {
  return (
    <>
      <header>
        <div className="d-flex flex-row align-items-center nav-logo">
          <Logo></Logo>
          <Nav></Nav>
        </div>

        <FiltroEmpleos />
      </header>
      <main>
        <CardContainer>
          <CardEmpleos datos={datosEmpleos}></CardEmpleos>
        </CardContainer>
      </main>
    </>
  )
}
