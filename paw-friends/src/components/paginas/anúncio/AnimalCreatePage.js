import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import AnimalCreateForm from './AnimalCreateForm'
import PageSubtitle from '../../layouts/PageSubtitle';

/* Esse componente é referente a página completa do anuncio de um animal */

function AnimalCreatePage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"Cadastrar Anúncio"}/>
            <PageSubtitle subtitle={"Insira os dados do seu pet!"}/>
            <AnimalCreateForm/>
        </>
    );
}

export default AnimalCreatePage;