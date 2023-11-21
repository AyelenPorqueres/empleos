/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import "./cardsCandidatos.css";
import Candidatos from "@/app/model/Candidatos";

export const CardCandidatos = (props: any) => {
  const { datos }: { datos: Candidatos[] } = props;

  return (
    <>
      {datos.map((item: Candidatos) => (
        <div className="containerCandidatos">
          <div className="contenedorImg">
            <img src={`/imagenes/imagenesCandidatos/${!item.imagen ? 'usuarioSinFoto' : item.imagen}.jpg`} className="imgCard" alt="ALFONSO JUAREZ" />
          </div>
          <div className="infoPersonal">
            <p className="textNombre">{item.nombreCompleto}</p>
            <p className="textEspecializacion">{item.especializacionLaboral}</p>
            <p className="textEdad">{item.edad} AÑOS</p>
          </div>

          <div className="divHabilidades">
            <p>{item.habilidadUno}</p>
            <p>{item.habilidadDos}</p>
            <p>{item.habilidadTres}</p>
            <p>{item.habilidadCuatro}</p>
          </div>

          <div className="divHabilidadesExtras">
            <p>{`HORARIO FULL TIME: ${item.infoExtraUno}`}</p>
            <p>{`MOVILIDAD PROPIA:${item.infoExtraDos}`}</p>
            <button type="button" className="buttonLinkedin"><i className="bi bi-linkedin"></i> Linkedin</button>
          </div>
        </div>
      ))}
    </>
  );
};
