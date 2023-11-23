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
import { ToastContainer, toast } from "react-toastify"

export default function Home() {
  
  const [datos, setDatos] = useState(datosCandidatos); 
  
  const handleAltaCandidato = (candidato:Candidatos) => {
    const newCandidato = 
    {...candidato,
      id: datos.length+1,
    } 

    console.log(newCandidato)
    const newDatos = [newCandidato, ...datos];
    setDatos(newDatos);
    toast.success("Su curriculum se cargo correctamente! Muchas gracias.")/*, {position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});*/
  }

  return (
    <>
      <header>
        <div className="d-flex flex-row align-items-center nav-logo">
          <Logo></Logo>
          <Nav></Nav>
        </div>
        <FiltroCandidatos></FiltroCandidatos>
      </header>
      <main>
        <CargarCv handleAltaCandidato= {(candidato:Candidatos) => handleAltaCandidato(candidato)}/>
        <CardContainer>
          <CardCandidatos datos={datos} key= {datos.keys()}></CardCandidatos>
        </CardContainer>
        <Footer></Footer>
        <ToastContainer />
      </main>
    </>
  )
}
