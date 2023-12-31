import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { Carrousel } from "../../componentes/carrousel/carrousel"
import { Info } from "../../componentes/infoPueblo/info"
import { Footer } from "../../componentes/footer/footer"
import ServiciosComponent from "../../componentes/serviciosHome/servicios";
import { Contacto } from "../../componentes/contacto/Contacto"
import './page.css'
import NumerosDeEmergencia from "../../componentes/numerosEmergencia/numerosEmergencia"


export default function Home() {
  return (
    <>
      <header>
        <div className='fondologo'>
          <Logo></Logo>
        </div>

        <Nav></Nav>

      </header>

      <main>
        <Carrousel />
        <Info></Info>
        <ServiciosComponent />
        <NumerosDeEmergencia></NumerosDeEmergencia>
        <Contacto></Contacto>
       
      </main>

      <Footer></Footer>
    </>
  )
}