import img from '../../img/logo.png'
import NavbarSearchBox from './NavbarSearchBox'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/index'>
                    <div className="navbar-brand"><img src={img} className="img-fluid" alt="logo"/></div>                
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto text-capitalize">
                        <Link to="/index" style={{textDecoration: 'none'}} >
                            <li className="nav-item active nav-link">
                                Inicio
                            </li>
                        </Link>
                        <Link to="/profiles/608af1bd5641fe4be8696fbb" style={{textDecoration: 'none'}} >
                            <li className="nav-item nav-link">
                                Sua conta
                            </li>
                        </Link>
                        <Link to="/chat" style={{textDecoration: 'none'}} >
                            <li className="nav-item nav-link">
                                Suas Mensagens
                            </li>
                        </Link>
                        <Link to="/index" style={{textDecoration: 'none'}}>
                            <li className="nav-item nav-link">
                                Seus anúncios
                            </li>
                        </Link>                        
                        <Link to="/criarAnuncio" style={{textDecoration: 'none'}}>
                            <li className="nav-item nav-link">
                                Criar Anúncio
                            </li>
                        </Link>
                        <li className="nav-item nav-link">
                            Sair
                        </li>
                    </ul>
                    <NavbarSearchBox/>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;