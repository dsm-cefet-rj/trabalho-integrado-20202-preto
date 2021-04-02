import PageTitle from '../../layouts/PageTitle'
import Navbar from '../../layouts/navbar/Navbar'
import ProfileCard from './ProfileCard'
import { useReducer } from 'react';
import profilesReducer from '../../../store/reducers'

export const ProfileData = {
            Id: "1",
            User: "usuario_teste",
            Nome: "usuario",
            Sobrenome: "teste",
            Email: "usu@email.com",
            Telefone: "(21) 9 1234-5678",
            CPF: "12345678900",
            CEP: "123456-78",
            Cidade: "teste",
            Endereço: "Rua Teste da Silva 45",
            Img: "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511"
}


function ProfilePage() {
    const [profiles, dispatch] = useReducer(profilesReducer, ProfileData);

    return(
        <>
            <Navbar/>
            <PageTitle title={"Editar Perfil"}/>
            <div className="container-fluid container-cards">
                <ProfileCard ProfileData={ProfileData} dispatch={dispatch}/>
            </div> 
        </>
    );
}

export default ProfilePage;