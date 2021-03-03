import Card from './Card'

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