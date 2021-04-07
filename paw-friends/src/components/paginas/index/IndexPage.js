import Navbar from '../../layouts/navbar/Navbar'
import Card from './Card'
import PageTitle from '../../layouts/PageTitle'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAnuncios, selectAllAnuncios } from '../../../store/reducers/anunciosReducer'
import React, { useEffect } from 'react'

export default function IndexPage() {
    const anuncios = useSelector(selectAllAnuncios);
    const dispatch = useDispatch();
    const status = useSelector(state => state.anuncios.status);
    const error = useSelector(state => state.anuncios.error);
    var pageTitle = '';
    let anunciosRow = null;

    //Fetch
    useEffect(() => {
        if(status === 'not_loaded' | status === 'saved'){
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
            pageTitle = 'Anúncios';
            anunciosRow = anuncios.map((anuncio) => {
                return <Card id={anuncio.id} anuncio={anuncio} />;
            });
            break;
    };

    return (
        <>
            <Navbar />
            <PageTitle title={pageTitle} />
            <div className="container-fluid container-cards">
                <div className="row d-flex justify-content-center mb-5">
                    {anunciosRow}
                </div>
            </div>
        </>
    );
}