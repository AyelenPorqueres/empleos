import { Logo } from "./componentes/logo/logo"
import { Nav } from "./componentes/nav/nav"
import { CardEmpleos } from "./componentes/cardEmpleos/cardEmpleos"
import { CardContainer } from "./componentes/cardContainer/cardContainer"


export default function Home() {
  return (
    <>
      <header>
        <Logo></Logo>
        <Nav></Nav>

      </header>
      <main>
        <CardContainer>
          <div className="row">
          <CardEmpleos></CardEmpleos>
          <CardEmpleos></CardEmpleos>
          <CardEmpleos></CardEmpleos>
          </div>
        </CardContainer>
      </main>
    </>
  )
}
