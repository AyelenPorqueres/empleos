import '/page.css'
import { Logo } from "./componentes/logo/logo"
import { Nav } from "./componentes/nav/nav"
import { Carrousel } from "./componentes/carrousel/carrousel"
import { Info } from "./componentes/infociudad/info"
import { Footer } from "./componentes/footer/footer"
import ServiciosComponent from "./componentes/serviciosHome/servicios";
import { Contacto } from "./componentes/contacto/Contacto"

export default function Home() {
  return (
   <>
   <header>
    <Logo></Logo>
    <Nav></Nav>

      </header>
      
      <main>
        <Carrousel />
        <Info></Info>
        <ServiciosComponent />
        <Contacto></Contacto>
      </main>

      <Footer></Footer>
    </>
  )
}