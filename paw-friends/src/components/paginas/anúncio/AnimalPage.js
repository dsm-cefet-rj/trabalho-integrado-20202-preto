import Navbar from '../../layouts/navbar/Navbar';
import AnimalCard from './AnimalCard';
import { useSelector } from 'react-redux';

/* Esse componente é referente a página completa do anuncio de um animal */

export default function AnimalPage() {
    const anuncio = useSelector(state => state.anuncios.anunciosObjs[state.anuncios.anunciosObjs.findIndex(x => x.key === state.anuncios.keyAnuncioAtual)])
    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                <AnimalCard anuncio={anuncio} />
            </div>
        </>
    );
}