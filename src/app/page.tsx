import { Logo } from "./componentes/logo/logo"
import { Nav } from "./componentes/nav/nav"
import { Carrousel } from "./componentes/carrousel/carrousel"
import { Footer } from "./componentes/footer/footer"

export default function Home() {
  return (
    <>
      <header>
        <Logo></Logo>
        <Nav></Nav>
      </header>
      <main>
        <Carrousel />
      </main>
        <Footer></Footer>
    </>
  )
}

