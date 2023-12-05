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
    toast.success("Su curriculum se cargo correctamente! Muchas gracias.", {position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});
  }

  const buscar = (datosFiltro: any) => {
    let newCandidatos: Candidatos[] = [];
    newCandidatos = datosCandidatos.filter((candidato) => {
      return (
      (datosFiltro.nombreCompleto != '' ? candidato.nombreCompleto.toLowerCase().includes(datosFiltro.nombreCompleto.toLowerCase()): candidato.nombreCompleto) &&
      (datosFiltro.edad == 'seleccione' ? candidato.edad : (datosFiltro.edad == "18-25" ? candidato.edad >= 18 : candidato.edad <= 25)) &&
      (datosFiltro.edad == 'seleccione' ? candidato.edad : (datosFiltro.edad == "26-33" ? candidato.edad >= 26 : candidato.edad <= 33)) &&
      (datosFiltro.edad == 'seleccione' ? candidato.edad : (datosFiltro.edad == "34-41" ? candidato.edad >= 34 : candidato.edad <= 41)) &&
      (datosFiltro.edad == 'seleccione' ? candidato.edad : (datosFiltro.edad == "42-49" ? candidato.edad >= 42 : candidato.edad <= 49)) &&
      (datosFiltro.edad == 'seleccione' ? candidato.edad : (datosFiltro.edad == "50-57" ? candidato.edad >= 50 : candidato.edad <= 57)) &&
      (datosFiltro.edad == 'seleccione' ? candidato.edad : (datosFiltro.edad == "57-65" ? candidato.edad >= 57 : candidato.edad <= 65)) &&
      (datosFiltro.infoExtraUno == 'seleccioneCargaHoraria' ? candidato.infoExtraUno : (datosFiltro.infoExtraUno == "partTime" ? candidato.infoExtraUno =  "NO" : candidato.infoExtraUno = "SI" )) &&
      (datosFiltro.infoExtraDos == 'seleccioneMovilidad' ? candidato.infoExtraDos : (datosFiltro.infoExtraDos == "movilidadNo" ? candidato.infoExtraDos =  "NO" : candidato.infoExtraDos = "SI" ))




      )
    });
    setDatos(newCandidatos);
  }

/*
  const buscar = (datosFiltro: any) => {
   
    if (datosFiltro.option == "nombreApellido") {
      newCandidatos = datos.filter(candidato => candidato.nombreCompleto.toLowerCase() == datosFiltro.value.toLowerCase());
    }
    if (datosFiltro.option == "edad") {
      newCandidatos = datos.filter(candidato => candidato.edad == datosFiltro.value);
    }
    if (datosFiltro.option == "fullTime") {
      newCandidatos = datos.filter(candidato => candidato.infoExtraUno.toLowerCase() == datosFiltro.value.toLowerCase());
    } 
    if (datosFiltro.option == "movilidad") {
      newCandidatos = datos.filter(candidato => candidato.infoExtraDos.toLowerCase() == datosFiltro.value.toLowerCase());
    }
    setDatos(newCandidatos);
  }*/




    return (
      <>
        <header>
          <div className="d-flex flex-row align-items-center nav-logo">
            <Logo></Logo>
            <Nav></Nav>
          </div>
          <FiltroCandidatos  buscar={(datos: any) => buscar(datos)}/>
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
