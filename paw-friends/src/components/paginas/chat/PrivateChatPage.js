import Navbar from '../../layouts/navbar/Navbar';
import PrivateChatCards from './PrivateChatCards';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById } from '../../../store/reducers/anunciosReducer';
import { useLayoutEffect } from 'react';
import { fetchChats } from '../../../store/reducers/chatReducer';

export default function PrivateChatPage () {


    const status = useSelector(state => state.anuncios.status);
    const status2 = useSelector(state => state.chats.status);
    const dispatch = useDispatch();
    let { id } = useParams();

    useLayoutEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch]);

    useLayoutEffect(()=>{
        if(status2 === 'not_loaded' || status2 === 'saved') {
            dispatch(fetchChats());
        }
    }, [status2, dispatch]);

    let anuncio = useSelector(state => selectAnunciosById(state, id));
    
    //segura o componente vazio até o estado mudar
    if (anuncio === undefined) {
        anuncio = {};
    }
    const privateChatCard = <PrivateChatCards anuncio={anuncio} />;

    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                {privateChatCard}
            </div>
        </>
    );
}