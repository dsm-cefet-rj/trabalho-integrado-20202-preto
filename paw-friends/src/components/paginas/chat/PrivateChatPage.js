import Navbar from '../../layouts/navbar/Navbar';
import React, { useState } from 'react';
import PrivateChatCards from './PrivateChatCards';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById } from '../../../store/reducers/anunciosReducer';
import { useLayoutEffect } from 'react';

export default function PrivateChatPage () {

    const status = useSelector(state => state.anuncios.status);
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    useLayoutEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch]);

    let anuncio = useSelector(state => selectAnunciosById(state, id));

//segura o componente vazio até o estado mudar
if (anuncio === undefined) {
    anuncio = {};
}   

    const [chats, setChats] = useState([
        "Diga Oi e comece sua adoção!"
    ]); 

    return (
        <>
            <Navbar/>
            <PrivateChatCards chats={chats} setChats={setChats} anuncio={anuncio}/>
        </>
    );
}