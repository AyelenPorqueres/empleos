export default interface Empleos {
    id: number,
    puesto: string,
    cargaHoraria: number,
    rubro: string,
    requisitos: string,
    descripcion: string,
    mostrarModal: boolean,
  };


  export const postulantes: any[] = []; 

  export const agregarPostulante = (postulante: any) => {
    postulantes.push(postulante);
  };