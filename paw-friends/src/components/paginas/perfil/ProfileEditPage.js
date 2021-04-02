import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ProfileEditForm from './ProfileEditForm'
import {ProfileData} from './ProfilePage';
import { useReducer } from 'react';
import profilesReducer from '../../../store/reducers'

/* Esse componente é referente a página completa da criação de perfil */

function ProfileEditPage() {

    const [profiles, dispatch] = useReducer(profilesReducer, ProfileData);

    return (
        <>
            <Navbar/>
            <PageTitle title={"Editar Perfil"}/>
            <PageSubtitle subtitle={"Edite suas informações!"}/>
            <ProfileEditForm ProfileData={ProfileData} dispatch={dispatch}/>
        </>
    );
}

export default ProfileEditPage;