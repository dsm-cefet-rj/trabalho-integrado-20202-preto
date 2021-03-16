import Navbar from '../../layouts/navbar/Navbar'
import AnimalCard from './AnimalCard'

/* Esse componente é referente a página completa do anuncio de um animal */

function AnimalPage() {
    return (
        <>
            <Navbar/>
            <div class="container-fluid container-cards">
                <AnimalCard />
            </div>
        </>
    );
}

export default AnimalPage;