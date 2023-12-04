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
    // Lógica de filtro según el rango de edades seleccionado
    if (datosFiltro.option === "edad" && datosFiltro.value) {
      const [minEdad, maxEdad] = datosFiltro.value.split('-').map(Number);
      const datosFiltrados = datos.filter((candidato) => candidato.edad >= minEdad && candidato.edad <= maxEdad);
      setDatos(datosFiltrados);
    } else {
      // Restaurar los datos originales si no hay filtro de edad
      setDatos(datosCandidatos);
    }
  };


  
 
  

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
