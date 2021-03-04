// Referente ao card principal detalhado da tela do anuncio do animal.
// Recebe um AnimalData, estrutura que representa o conjunto de dados de um anuncio.

import PageTitle from "./PageTitle";

function AnimalCard(props) {
    return (
        <div class="row d-flex justify-content-center mt-4 mb-5">
            <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                <PageTitle title={props.AnimalData.Nome}/>
                <div class="card mb-3">
                    <img class="card-img-top" src={props.AnimalData.Img} alt="Card image" />
                    <div class="card-body">
                        <h5 class="card-title ">Idade: </h5>
                        <p class="card-text">{props.AnimalData.Idade}</p>

                        <h5 class="card-title mt-2">Raça: </h5>
                        <p class="card-text">{props.AnimalData.Raça}</p>

                        <h5 class="card-title mt-2">Sexo: </h5>
                        <p class="card-text">{props.AnimalData.Sexo}</p>
                        
                        <h5 class="card-title mt-2">Temperamento: </h5>
                        <p class="card-text">{props.AnimalData.Temperamento}</p>
                        
                        <h5 class="card-title">Descrição: </h5>
                        <p class="card-text">{props.AnimalData.Description}</p>

                        <p class="card-text"><small class="text-muted">Postado no dia {props.AnimalData.Post.PostDate} em {props.AnimalData.Post.PostCity}, {props.AnimalData.Post.PostState} por {props.AnimalData.UserOwner}</small></p>
                        <div class="row text-center justify-content-center">
                            <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                                <a href="#" class="btn btn-outline-dark btn-adocao">Adotar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimalCard;