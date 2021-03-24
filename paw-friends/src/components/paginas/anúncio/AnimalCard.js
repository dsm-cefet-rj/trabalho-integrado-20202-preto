import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

function AnimalCard(props) {
    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                <PageTitle title={props.anuncio.nome} />
                <div className="card mb-3">
                    <img className="card-img-top" src={props.anuncio.img} alt="Animal" />
                    <div className="card-body">
                        <h5 className="card-title ">Idade: </h5>
                        <p className="card-text">{props.anuncio.idade}</p>

                        <h5 className="card-title mt-2">Raça: </h5>
                        <p className="card-text">{props.anuncio.raça}</p>

                        <h5 className="card-title mt-2">Sexo: </h5>
                        <p className="card-text">{props.anuncio.sexo}</p>

                        <h5 className="card-title mt-2">Temperamento: </h5>
                        <p className="card-text">{props.anuncio.temperamento}</p>

                        <h5 className="card-title">Descrição: </h5>
                        <p className="card-text">{props.anuncio.descricao}</p>

                        <p className="card-text"><small className="text-muted">Postado no dia {props.anuncio.post.dataPost} em {props.anuncio.post.cidadePost}, {props.anuncio.post.estadoPost} por {props.anuncio.usuario}</small></p>
                        <div className="row text-center justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                                <Link to='/privateChat'>
                                    <button className="btn btn-outline-dark btn-adocao">Adotar</button>
                                </Link>
                                <Link to='/editarAnuncio'>
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