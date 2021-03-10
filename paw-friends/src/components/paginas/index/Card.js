//Componente que representa um card pequeno da tela principal. 
//Uma versão simplificada do AnimalCard.js, pra exibição em grid na tela principal.

function Card(props) {
    return (
        <>
            <div className="col-10 col-sm-6 col-md-4 col-lg-4 mt-4 d-flex justify-content-center">
                <div className="card">
                    <img className="card-img-top"
                        src={props.card.CardImg}
                        alt="Card cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.card.CardTitle}</h5>
                        <p className="card-text">{props.card.CardDescription}</p>
                        <a href="/animal" className="btn btn-outline-dark text-capitalize">Mais informações</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;