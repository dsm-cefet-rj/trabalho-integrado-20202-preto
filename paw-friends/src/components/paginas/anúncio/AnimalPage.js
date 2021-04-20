import Navbar from '../../layouts/navbar/Navbar';
import AnimalCard from './AnimalCard';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById, deleteAnunciosServer } from '../../../store/reducers/anunciosReducer';
import { useLayoutEffect } from 'react';
   
export default function AnimalPage() {
    const status = useSelector(state => state.anuncios.status);
    const dispatch = useDispatch();
    let { id } = useParams();

    function handleDeleteAnuncio(id){
        dispatch(deleteAnunciosServer(id));
    };

    useLayoutEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch]);

    const anuncio = useSelector(state => selectAnunciosById(state, id));

    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                <AnimalCard anuncio={anuncio} handleDeleteAnuncio={handleDeleteAnuncio}/>
            </div>
        </>
    );
}