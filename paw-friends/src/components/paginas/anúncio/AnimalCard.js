import { useState } from 'react'
import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

function AnimalCard() {
    const [anuncio, setAnuncio] = useState(
        {
            "img": "https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg",
            "nome": "Salvador",
            "idade": "1",
            "raça": "Spitz",
            "sexo": "Macho",
            "temperamento": "Agitado",
            "post": {
                "dataPost": "12/10/2020",
                "cidadePost": "Macaé",
                "estadoPost": "Rio de Janeiro"
            },
            "descricao": "Quero dar esse gato fofo para adoção pois não tenho recursos financeiros para cuidar dele. Ele é bem agitado, gosta de bater nas pessoas e provavelmente vai acabar com a sua casa. Mas ele é lindo. Olha pra essa cara fofa.",
            "cardDescricao": "Descrição 1",
            "usuario": "juninho123"
        }
    )
    return (
        <div class="row d-flex justify-content-center mt-4 mb-5">
            <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                <PageTitle title={anuncio.nome} />
                <div class="card mb-3">
                    <img class="card-img-top" src={anuncio.img} alt="Animal" />
                    <div class="card-body">
                        <h5 class="card-title ">Idade: </h5>
                        <p class="card-text">{anuncio.idade}</p>

                        <h5 class="card-title mt-2">Raça: </h5>
                        <p class="card-text">{anuncio.raça}</p>

                        <h5 class="card-title mt-2">Sexo: </h5>
                        <p class="card-text">{anuncio.sexo}</p>

                        <h5 class="card-title mt-2">Temperamento: </h5>
                        <p class="card-text">{anuncio.temperamento}</p>

                        <h5 class="card-title">Descrição: </h5>
                        <p class="card-text">{anuncio.descricao}</p>

                        <p class="card-text"><small class="text-muted">Postado no dia {anuncio.post.dataPost} em {anuncio.post.cidadePost}, {anuncio.post.estadoPost} por {anuncio.usuario}</small></p>
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