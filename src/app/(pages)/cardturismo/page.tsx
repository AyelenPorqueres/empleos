import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { PortadaTurismo } from "@/app/componentes/portadaTurismo/portadaTurismo"
import { ContainerImagenesTurismo } from "@/app/componentes/containerImagenesTurismo/containerImagenesTurismo"
import { ImagenesTurismo } from "@/app/componentes/imagenesTurismo/imagenesTurismo"
import { Footer } from "@/app/componentes/footer/footer"
import './page.css'
import { EventosTurismo } from "@/app/componentes/eventosTurismo/eventosTurismo"
import { datosEventoTurismo } from "@/app/services/datosEventosTurismo"
import { datosImagenesTurismo} from "@/app/services/datosImagenesTurismo"

export default function Home() {
  
  return (
    <>
      <header>
        <div className="d-flex flex-row align-items-center nav-logo">
          <Logo></Logo>
          <Nav></Nav>
        </div>
        
      </header>
      <main>
        <PortadaTurismo></PortadaTurismo>
        <ContainerImagenesTurismo>
          <ImagenesTurismo datos={datosImagenesTurismo}></ImagenesTurismo>
        </ContainerImagenesTurismo>

        <EventosTurismo datos={datosEventoTurismo}></EventosTurismo>
        <Footer></Footer>
      </main>
    </>
  )
}
