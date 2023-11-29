import Link from 'next/link';
import './nav.css'

export const Nav = () => {
    return (
        <nav className="menu" >
            <ul className="items">
                <Link className='links'
                    href={{ pathname: '/home', }}
                >INICIO
                </Link>

                <Link className='links'
                    href={
                        {
                            pathname: '/cardempleos',
                        }
                    }
                > EMPLEOS
                </Link>

                <Link className='links'
                    href={
                        {
                            pathname: '/cardcandidatos',
                        }
                    }
                > CANDIDATOS
                </Link>

                <Link className='links'
                    href={
                        {
                            pathname: '/cardturismo',
                        }
                    }
                >TURISMO
                </Link>
                <Link className='links'
                    href='/home#linkcontacto'
                >CONTACTO
                </Link>
            </ul>
        </nav>

    );
}

