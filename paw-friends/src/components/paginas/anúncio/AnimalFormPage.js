import Navbar from '../../layouts/navbar/Navbar';
import PageTitle from '../../layouts/PageTitle';
import AnimalForm from './AnimalForm';
import PageSubtitle from '../../layouts/PageSubtitle';

function AnimalFormPage(props) {
    let pageTitle = '';
    let pageSubtitle = '';
    if(props.type === 'edit'){
        pageTitle = 'Editar Anúncio';
        pageSubtitle = 'Edite os dados do seu pet';
    }else{
        pageTitle = 'Cadastrar Anúncio';
        pageSubtitle = 'Insira os dados do seu pet!';
    }
    return (
        <>
            <Navbar/>
            <PageTitle title={pageTitle}/>
            <PageSubtitle subtitle={pageSubtitle}/>
            <AnimalForm type={props.type}/>
        </>
    );
}

export default AnimalFormPage;