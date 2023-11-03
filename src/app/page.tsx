import '/page.css'
import { Logo } from "./componentes/logo/logo"
import { Nav } from "./componentes/nav/nav"
import { Footer } from "./componentes/footer/footer"
import ServiciosComponent from "./componentes/serviciosHome/servicios";

export default function Home() {
  return (
   <div className="containerBody">
   <header>
    <Logo></Logo>
    <Nav></Nav>

   </header>
   <main>
   <ServiciosComponent/>
   </main>
   <Footer></Footer>

   </div>
  )
}

