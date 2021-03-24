import React from 'react';
import { Link } from 'react-router-dom'

function CardButton(props) {
    return (
        <Link to={`/animal/${props.id}`}>            
            <button className="btn btn-outline-dark text-capitalize">Mais informações</button>
        </Link>
    );
}

export default CardButton;