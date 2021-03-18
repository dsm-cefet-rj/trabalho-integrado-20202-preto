import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setKeyAnuncioAtual } from '../../../store/reducers/anunciosReducer';


function CardButton(props) {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(setKeyAnuncioAtual(props.keyAnuncio))
    }
    return (
        <Link to='/animal'>
            <button className="btn btn-outline-dark text-capitalize" onClick={onClickHandler}>Mais informações</button>
        </Link>
    );
}

export default CardButton;