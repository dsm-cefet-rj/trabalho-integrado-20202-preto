import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileForm from './ProfileForm'

/* Esse componente é referente a página completa da criação de perfil */

function ProfileFormPage(props) {

    let pageTitle = '';
    let pageSubtitle = '';
    if(props.type === 'edit'){
        pageTitle = 'Editar Perfil';
        pageSubtitle = 'Edite os seus dados';
    }else{
        pageTitle = 'Criar Perfil';
        pageSubtitle = 'Insira os seus dados!';
    }

    return (
        <>
            <Navbar/>
            <PageTitle title={pageTitle}/>
            <PageSubtitle subtitle={pageSubtitle}/>
            <ProfileForm type={props.type} />
        </>
    );
}

export default ProfileFormPage;