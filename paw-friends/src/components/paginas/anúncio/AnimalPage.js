import Navbar from '../../layouts/navbar/Navbar';
import AnimalCard from './AnimalCard';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById } from '../../../store/reducers/anunciosReducer';
import { useEffect } from 'react';
   
export default function AnimalPage() {
    const status = useSelector(state => state.anuncios.status);
    //const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    useEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch]);

    const anuncio = useSelector(state => selectAnunciosById(state, id));
    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                <AnimalCard anuncio={anuncio} />
            </div>
        </>
    );
}