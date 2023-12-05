'use client'
import { Logo } from "../../componentes/logo/logo"
import { Nav } from "../../componentes/nav/nav"
import { CardCandidatos } from "../../componentes/cardCandidatos/cardsCandidatos"
import { CardContainer } from "../../componentes/cardContainer/cardContainer"
import { datosCandidatos } from "@/app/services/datosCandidatos"
import CargarCv from "@/app/componentes/cargarCV/cargarCv"
import { FiltroCandidatos } from "@/app/componentes/filtroCandidatos/filtroCandidatos"
import { Footer } from "@/app/componentes/footer/footer"
import Candidatos from "@/app/model/Candidatos"
import './page.css'
import { useState } from "react"
import { toast } from "react-toastify"

export default function Home() {

  const [datos, setDatos] = useState(datosCandidatos);

  const handleAltaCandidato = (candidato: Candidatos) => {
    const newCandidato =
    {
      ...candidato,
      id: datos.length + 1,
    }

    console.log(newCandidato)
    const newDatos = [newCandidato, ...datos];
    setDatos(newDatos);
    toast.success("Su curriculum se cargo correctamente! Muchas gracias.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const filtrarPorEdad = (edadFiltro: string, candidato: Candidatos): boolean => {
    switch (edadFiltro) {
      case 'seleccione':
        return true;
      case "18-25":
        return candidato.edad >= 18 && candidato.edad <= 25;
      case "26-33":
        return candidato.edad >= 26 && candidato.edad <= 33;
      case "34-41":
        return candidato.edad >= 34 && candidato.edad <= 41;
      case "42-49":
        return candidato.edad >= 42 && candidato.edad <= 49;
      case "50-57":
        return candidato.edad >= 50 && candidato.edad <= 57;
      case "58-65":
        return candidato.edad >= 58 && candidato.edad <= 65;
      default:
        return false;
    }
  };

  const buscar = (datosFiltro: any) => {
    let newCandidatos: Candidatos[] = [];
    newCandidatos = datosCandidatos.filter((candidato) => {
      return (

        filtrarPorEdad(datosFiltro.edad, candidato) &&
        (datosFiltro.nombreCompleto != '' ? candidato.nombreCompleto.toLowerCase().includes(datosFiltro.nombreCompleto.toLowerCase()) : candidato.nombreCompleto) &&
        (datosFiltro.infoExtraUno == 'seleccioneCargaHoraria' ? candidato.infoExtraUno : (datosFiltro.infoExtraUno == "partTime" ? candidato.infoExtraUno === "NO" : candidato.infoExtraUno === "SI")) &&
        (datosFiltro.infoExtraDos == 'seleccioneMovilidad' ? candidato.infoExtraDos : (datosFiltro.infoExtraDos == "movilidadNo" ? candidato.infoExtraDos === "NO" : candidato.infoExtraDos === "SI"))

      )
    });
    setDatos(newCandidatos);
  }
    return (
      <>
        <header>
          <div className="d-flex  align-items-center nav-logo">
            <Logo></Logo>
            <Nav></Nav>
          </div>
          <FiltroCandidatos buscar={(datos: any) => buscar(datos)} />
        </header>
        <main>
          <CargarCv handleAltaCandidato={(candidato: Candidatos) => handleAltaCandidato(candidato)} />
          <CardContainer>
            <CardCandidatos datos={datos} key={datos.keys()}></CardCandidatos>
          </CardContainer>
          <Footer></Footer>
        </main>
      </>
    )
  }
