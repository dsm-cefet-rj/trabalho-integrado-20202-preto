import Card from './Card'

// Componente que renderiza a grid de cards de anuncios.
// Recebe um array de "cards" e itera para exibir cada card em um componente Card.js
// Retorna todos os cards numa row para serem reordenados dinamicamente pelo bootstrap.

function CardGrid(props) {
    return (
        <div class="row d-flex justify-content-center mb-5">
            {props.CardList.map((card) => {
                return <Card card={card}/>;
            })}
        </div>
    );
}

export default CardGrid;