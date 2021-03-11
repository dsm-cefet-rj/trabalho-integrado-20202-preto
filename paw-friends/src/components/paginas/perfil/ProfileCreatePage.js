import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileCreateForm from './ProfileCreateForm'

/* Esse componente é referente a página completa da criação de perfil */

function ProfileCreatePage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"Criar Conta"}/>
            <PageSubtitle subtitle={"Cria seu perfil no nosso site!"}/>
            <ProfileCreateForm/>
        </>
    );
}

export default ProfileCreatePage;