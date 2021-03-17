import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

function AnimalCard(props) {
    return (
        <div class="row d-flex justify-content-center mt-4 mb-5">
            <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                <PageTitle title={props.anuncio.nome} />
                <div class="card mb-3">
                    <img class="card-img-top" src={props.anuncio.img} alt="Animal" />
                    <div class="card-body">
                        <h5 class="card-title ">Idade: </h5>
                        <p class="card-text">{props.anuncio.idade}</p>

                        <h5 class="card-title mt-2">Raça: </h5>
                        <p class="card-text">{props.anuncio.raça}</p>

                        <h5 class="card-title mt-2">Sexo: </h5>
                        <p class="card-text">{props.anuncio.sexo}</p>

                        <h5 class="card-title mt-2">Temperamento: </h5>
                        <p class="card-text">{props.anuncio.temperamento}</p>

                        <h5 class="card-title">Descrição: </h5>
                        <p class="card-text">{props.anuncio.descricao}</p>

                        <p class="card-text"><small class="text-muted">Postado no dia {props.anuncio.post.dataPost} em {props.anuncio.post.cidadePost}, {props.anuncio.post.estadoPost} por {props.anuncio.usuario}</small></p>
                        <div class="row text-center justify-content-center">
                            <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                                <Link to='/privateChat'>
                                    <button class="btn btn-outline-dark btn-adocao">Adotar</button>
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