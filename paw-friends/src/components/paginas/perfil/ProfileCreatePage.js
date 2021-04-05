import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileCreateForm from './ProfileCreateForm'
import { useReducer } from 'react';
import profilesReducer from '../../../store/reducers'

/* Esse componente é referente a página completa da criação de perfil */

function ProfileCreatePage() {

    return (
        <>
            <Navbar/>
            <PageTitle title={"Criar Conta"}/>
            <PageSubtitle subtitle={"Crie seu perfil!"}/>
            <ProfileCreateForm />
        </>
    );
}

export default ProfileCreatePage;