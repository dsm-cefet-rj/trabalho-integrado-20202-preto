import img from './img/logo.png'

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
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-capitalize">
                        <li className="nav-item active">
                            <a className="nav-link active" href="template.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="telaPerfil.html">Sua conta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Seus anúncios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="template.html">Sair</a>
                        </li>
                    </ul>
                    {/* Inserir search box aqui */}
            </div>
            </div>
        </nav>
    );
}

export default Navbar;