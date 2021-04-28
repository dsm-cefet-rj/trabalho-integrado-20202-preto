import Navbar from '../../layouts/navbar/Navbar';
import PageTitle from '../../layouts/PageTitle';
import PageSubtitle from '../../layouts/PageSubtitle';
import {Link} from 'react-router-dom';
/* Esse componente é referente a página completa da criação de perfil */

function ProfileLoginPage() {
    const title = 'Adote seu Pet com o Paw Friends!';
    const subtitle = 'Nossa solução permite que você encontre um amigo para adoção perto da sua casa! Você pode negociar a adoção diretamente com o dono, do conforto da sua casa e através do seu celular!';
    return (
        <>
            <Navbar/>
            <PageTitle title={title}/>
            <PageSubtitle subtitle={subtitle}/>
            <div class="row mt-2">
                <div class="container-fluid text-center">
                    <Link to="/login">
                        <button type="button" class="btn btn-outline-dark btn-lg text-capitalize">Adote Já!</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProfileLoginPage;