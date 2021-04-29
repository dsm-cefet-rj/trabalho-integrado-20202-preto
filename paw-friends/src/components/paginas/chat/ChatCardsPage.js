//Chat Page from the app

import Navbar from '../../layouts/navbar/Navbar';
import PageTitle from '../../layouts/PageTitle';
import UserCards from './UserCards';
import {fetchChats, selectAllChats} from '../../../store/reducers/chatReducer';
import { fetchAnuncios, selectAllAnuncios } from '../../../store/reducers/anunciosReducer'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'

function ChatCardsPage() {
    
    const chats = useSelector(selectAllChats);
    let anuncios = useSelector(selectAllAnuncios);
    var iddosusers = chats.map(chat => chat.id_user);
    var IdsUsers = iddosusers.filter(function(este, i) {
        return iddosusers.indexOf(este) === i;
    });
    const anunciossalvos = IdsUsers.map(function(iduser){
        return anuncios.filter(perfil => perfil.id === iduser)
    });
    const anunciossaveds = anunciossalvos.flat();
    const dispatch = useDispatch();
    const status = useSelector(state => state.chats.status);
    const error = useSelector(state => state.chats.error);
    var pageTitle = '';
    let chatsRow = null;
    
    //Fetch
    useEffect(() => {
        if(status === 'not_loaded' | status === 'saved'){
            dispatch(fetchChats());
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch])

    //Gerencia status
    switch(status){
        case 'loading':
            pageTitle = 'Carregando anúncios';
            break;
        case 'failed':
            pageTitle = 'Erro! ' + error;
            break;
        default:
            pageTitle = 'Suas Mensagens';
            chatsRow = anunciossaveds.map((anuncio) => {
                return <UserCards id={anuncio.id_user} anuncio={anuncio} />;
            });
            break;
    };

    return (
        <>
            <Navbar/>
            <PageTitle title={pageTitle}/>
            <div className="container-fluid container-cards">
                <div className="row d-flex justify-content-center mb-5">
                    {chatsRow}
                </div>
            </div>
            
        </>
    );
}

export default ChatCardsPage;