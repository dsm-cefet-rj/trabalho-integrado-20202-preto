import Navbar from '../../layouts/navbar/Navbar'
import AnimalCard from './AnimalCard'
import { connect } from 'react-redux'

/* Esse componente é referente a página completa do anuncio de um animal */

function AnimalPage({ anuncio }) {
    return (
        <>
            <Navbar/>
            <div class="container-fluid container-cards">
                <AnimalCard anuncio={anuncio} />
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    anuncio: state.anuncios[state.idAnuncioAtual],
});

export default connect(mapStateToProps)(AnimalPage);