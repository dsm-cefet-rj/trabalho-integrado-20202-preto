import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

function AnimalCard(props) {
    let anuncio = props.anuncio;

    //segura o componente vazio até o estado mudar
    if (anuncio === undefined) {
        anuncio = {};
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                <PageTitle title={anuncio.nome} />
                <div className="card mb-3">
                    <img className="card-img-top" src={anuncio.img} alt="Animal" />
                    <div className="card-body">
                        <h5 className="card-title mt-2">Tipo: </h5>
                        <p className="card-text">{anuncio.tipo}</p>
                        
                        <h5 className="card-title mt-2">Raça: </h5>
                        <p className="card-text">{anuncio.raça}</p>

                        <h5 className="card-title ">Idade: </h5>
                        <p className="card-text">{anuncio.idade}</p>

                        <h5 className="card-title mt-2">Sexo: </h5>
                        <p className="card-text">{anuncio.sexo}</p>

                        <h5 className="card-title mt-2">Temperamento: </h5>
                        <p className="card-text">{anuncio.temperamento}</p>

                        <h5 className="card-title">Descrição: </h5>
                        <p className="card-text">{anuncio.descricao}</p>

                        <p className="card-text"><small className="text-muted">Postado em {anuncio.dataAnuncio}</small></p>
                        <div className="row text-center justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                                <Link to='/privateChat'>
                                    <button className="btn btn-outline-dark btn-adocao">Adotar</button>
                                </Link>
                                <Link to={`/editarAnuncio/${anuncio.id}`}>
                                    <button className="btn btn-outline-dark btn-adocao">Editar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimalCard;