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
    newEmpleos = datosEmpleos.filter((empleo) => {
      return (
      (datosFiltro.cargaHoraria == 'seleccione' ? empleo.cargaHoraria : (datosFiltro.cargaHoraria == 'partTime' ? empleo.cargaHoraria <= 5 : empleo.cargaHoraria > 5) ) &&
      (datosFiltro.puesto != '' ? empleo.puesto.toLowerCase().includes(datosFiltro.puesto.toLowerCase()): empleo.puesto) &&
      (datosFiltro.rubro != '' ? empleo.rubro.toLowerCase().includes(datosFiltro.rubro.toLowerCase()): empleo.rubro)
      )
    });
    setDatos(newEmpleos);
  }

  return (
    <>
      <header>
        <div className="d-flex flex-row align-items-center nav-logo">
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
