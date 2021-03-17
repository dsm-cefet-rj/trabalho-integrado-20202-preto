import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import AnimalEditForm from './AnimalEditForm'
import PageSubtitle from '../../layouts/PageSubtitle';

/* Esse componente é referente a página completa do anuncio de um animal */

function AnimalEditPage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"Editar Anúncio"}/>
            <PageSubtitle subtitle={"Edite os dados do seu pet!"}/>
            <AnimalEditForm/>
        </>
    );
}

export default AnimalEditPage;