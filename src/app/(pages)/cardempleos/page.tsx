"use client"
import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { CardEmpleos } from "../../componentes/cardEmpleos/cardEmpleos"
import { CardContainer } from "../../componentes/cardContainer/cardContainer"
import { datosEmpleos } from "../../services/datosEmpleos"
import { FiltroEmpleos } from "@/app/componentes/filtroEmpleos/filtroEmpleos"
import { Footer } from "@/app/componentes/footer/footer"
import { useState } from "react"
import './page.css'
import Empleos from "@/app/model/Empleos"

export default function Home() {
  const [datos, setDatos] = useState(datosEmpleos);

  const buscar = (datosFiltro: any) => {
    let newEmpleos: Empleos[] = [];
    if (datosFiltro.option == "puesto") {
      newEmpleos = datos.filter(empleo => empleo.puesto.toLowerCase() == datosFiltro.value.toLowerCase());
    } else if (datosFiltro.option == "rubro") {
      newEmpleos = datos.filter(empleo => empleo.rubro.toLowerCase() == datosFiltro.value);
    } else if (datosFiltro.option == "cargaHoraria") {
      newEmpleos = datos.filter(empleo => empleo.cargaHoraria == datosFiltro.value.toLowerCase());
    }
    setDatos(newEmpleos);
  }
  return (
    <>
      <header>
        <div className="d-flex  align-items-center nav-logo">
          <Logo></Logo>
          <Nav></Nav>
        </div>
        <FiltroEmpleos buscar={(datos: any) => buscar(datos)} />
      </header>
      <main>
        <CardContainer>
          <CardEmpleos datos={datos}></CardEmpleos>
        </CardContainer>


        <Footer></Footer>
      </main>
    </>
  )
}
