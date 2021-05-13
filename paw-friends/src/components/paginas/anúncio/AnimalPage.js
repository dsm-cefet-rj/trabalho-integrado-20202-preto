import Navbar from '../../layouts/navbar/Navbar';
import AnimalCard from './AnimalCard';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById} from '../../../store/reducers/anunciosReducer';
import { fetchChats, selectAllChats } from "../../../store/reducers/chatReducer";
import { useLayoutEffect } from 'react';
   
export default function AnimalPage() {
    const status = useSelector(state => state.anuncios.status);
    const dispatch = useDispatch();
    let { id } = useParams();

    useLayoutEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
            dispatch(fetchChats());
        }
    }, [status, dispatch]);

    const anuncio = useSelector(state => selectAnunciosById(state, id));
    const chats = useSelector(state => selectAllChats(state));
    const animalCard = <AnimalCard chats={chats} anuncio={anuncio}/>;


    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                {animalCard}
            </div>
        </>
    );
}