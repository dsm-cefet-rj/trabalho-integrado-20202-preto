import img from '../../img/logo.png'
import NavbarSearchBox from './NavbarSearchBox'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img src={img} className="img-fluid" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto text-capitalize">
                        <li className="nav-item active">
                            <a className="nav-link active" href="/index">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/seuPerfil">Sua conta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/seusAnuncios">Seus anúncios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/criarAnuncio">Criar Anúncio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sair</a>
                        </li>
                    </ul>
                    <NavbarSearchBox/>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;