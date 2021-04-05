import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileEditForm from './ProfileEditForm'
import { useReducer } from 'react';
import profilesReducer from '../../../store/reducers'

/* Esse componente é referente a página completa da criação de perfil */

function ProfileEditPage() {

    return (
        <>
            <Navbar/>
            <PageTitle title={"Editar Perfil"}/>
            <PageSubtitle subtitle={"Edite suas informações!"}/>
            <ProfileEditForm />
        </>
    );
}

export default ProfileEditPage;