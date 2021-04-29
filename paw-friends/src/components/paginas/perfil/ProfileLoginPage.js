import Navbar from '../../layouts/navbar/Navbar';
import PageTitle from '../../layouts/PageTitle';
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileLoginForm from './ProfileLoginForm';

/* Esse componente é referente a página completa da criação de perfil */

function ProfileLoginPage(props) {
    var title = '';
    var subtitle = '';

    if(props.type === 'login'){
        title = 'Login';
        subtitle = 'Entre na sua conta!';
    }else{
        title = 'Criar usuário'
        subtitle = 'Crie o seu usuario!';
    }
    
    return (
        <>
            <Navbar/>
            <PageTitle title={title}/>
            <PageSubtitle subtitle={subtitle}/>
            <ProfileLoginForm type={props.type}/>
        </>
    );
}

export default ProfileLoginPage;