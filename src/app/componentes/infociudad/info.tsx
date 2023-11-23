
import Link from 'next/link';
import './info.css';

export const Info = () => {
    return (
        <>
            
            <h2 className='titulo-ciudad'> SIERRAS BAYAS, UN PUEBLO MINERO.</h2>
            
            <div className="containerInfo">
                
                <div className="divInfo">
                    <p>Sierras Bayas se ubica a 20 kilómetros de la ciudad de Olavarría. En dirección sudeste se direcciona la hermosa villa minera. Toma su nombre del color amarillento de la piedra que allí abunda, la dolomita. En Sierras Bayas se puede visitar antiguas fábricas de cal, hacer trekking por los senderos serranos, disfrutar de hermosas vistas desde lo alto de sus miradores y deslumbrarse con los lagos de cantera.</p>
                    <button className='botonInfo'>
                    <Link 
                    className='links-vermas'  
                    href={{pathname: '/cardturismo',}}
                      >
                      MÁS INFO
                     </Link>
                    
                    
                    </button>
                   
                </div>
                <div>
                    
                </div>
                <div className='divVideo'>
                    <iframe className='video'
                        src="https://www.youtube.com/embed/ytOBqpmQKvI"  
                        title="Video de YouTube"
                    ></iframe>
                </div>
            </div>
        </>
    )
}
