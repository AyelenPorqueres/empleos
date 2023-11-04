import { Logo } from "./componentes/logo/logo"
import { Nav } from "./componentes/nav/nav"
import { Footer } from "./componentes/footer/footer"
import { Contacto } from "./componentes/contacto/Contacto"

export default function Home() {
  return (
    <>
      <header>
        <Logo></Logo>
        <Nav></Nav>
      </header>
      <main>
        <Contacto></Contacto>
      </main>
        
      <Footer></Footer>
    </>
  )
}

