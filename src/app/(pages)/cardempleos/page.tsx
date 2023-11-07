import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { CardEmpleos } from "../../componentes/cardEmpleos/cardEmpleos"
import { CardContainer } from "../../componentes/cardContainer/cardContainer"
import { datosEmpleos } from "../../services/datosEmpleos"

export default function Home() {
  return (
    <>
      <header>
        <Logo></Logo>
        <Nav></Nav>

      </header>
      <main>
        <CardContainer>
            <CardEmpleos datos={datosEmpleos}></CardEmpleos>
        </CardContainer>
      </main>
    </>
  )
}
