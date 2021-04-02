import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileCreateForm from './ProfileCreateForm'
import { useReducer } from 'react';
import profilesReducer from '../../../store/reducers'
import {ProfileData} from './ProfilePage';

/* Esse componente é referente a página completa da criação de perfil */

function ProfileCreatePage() {

    const [profiles, dispatch] = useReducer(profilesReducer, ProfileData);

    return (
        <>
            <Navbar/>
            <PageTitle title={"Criar Conta"}/>
            <PageSubtitle subtitle={"Crie seu perfil!"}/>
            <ProfileCreateForm ProfileData={ProfileData} dispatch={dispatch} />
        </>
    );
}

export default ProfileCreatePage;