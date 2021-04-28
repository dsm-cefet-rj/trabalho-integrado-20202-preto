import Navbar from '../../layouts/navbar/Navbar';
import PageTitle from '../../layouts/PageTitle';
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileLoginForm from './ProfileLoginForm';

/* Esse componente é referente a página completa da criação de perfil */

function ProfileLoginPage() {
    const title = 'Login';
    const subtitle = 'Entre na sua conta!';
    return (
        <>
            <Navbar/>
            <PageTitle title={title}/>
            <PageSubtitle subtitle={subtitle}/>
            <ProfileLoginForm/>
        </>
    );
}

export default ProfileLoginPage;