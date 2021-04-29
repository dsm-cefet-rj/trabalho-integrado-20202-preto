import Navbar from '../../layouts/navbar/Navbar';
import AnimalCard from './AnimalCard';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById, deleteAnuncioServer } from '../../../store/reducers/anunciosReducer';
import { useLayoutEffect } from 'react';
   
export default function AnimalPage() {
    const status = useSelector(state => state.anuncios.status);
    const dispatch = useDispatch();
    let { id } = useParams();

    function handleDeleteAnuncio(id){
        dispatch(deleteAnuncioServer(id));
    };

    useLayoutEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch]);

    const anuncio = useSelector(state => selectAnunciosById(state, id));
    const animalCard = <AnimalCard anuncio={anuncio} handleDeleteAnuncio={handleDeleteAnuncio}/>;


    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                {animalCard}
            </div>
        </>
    );
}