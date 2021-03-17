import React from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

function CardButton(props) {
    return (
        <Link to='/animal'>
            <button className="btn btn-outline-dark text-capitalize" onClick={() => props.clickMaisInfos(props.keyAnuncio)}>Mais informações</button>
        </Link>
    );
}

export default CardButton;