import {createSlice} from '@reduxjs/toolkit';


const initialProfileData = [{
    Id: "1",
    User: "usuario_teste",
    Nome: "usuario",
    Sobrenome: "teste",
    Email: "usu@email.com",
    Telefone: "(21) 9 1234-5678",
    CPF: "12345678900",
    CEP: "12345678",
    Cidade: "teste",
    Endereço: "Rua Teste da Silva 45",
    Senha: "usupass",
    Img: "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511"
},
{
    Id: "2",
    User: "usuario2_teste",
    Nome: "usuario2",
    Sobrenome: "teste2",
    Email: "usu@email.com",
    Telefone: "(21) 9 1234-5678",
    CPF: "12345678900",
    CEP: "12345678",
    Cidade: "teste",
    Endereço: "Rua Teste da Silva 45",
    Senha: "usu2pass",
    Img: "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511"
}
];

function addProfileReducer(profiles, profile){
    let proxId = 1 + profiles.map(prof => prof.Id).reduce((x,y)=> Math.max(x,y));
    return profiles.concat ([{...profile, id:proxId}]);
}

function updateProfileReducer(profiles, profile){
    let index = profiles.map(prof => prof.Id).indexOf(profile.Id);
    profiles.splice(index, 1, profile);
    return profiles;
}

function deleteProfileReducer(profiles, Id){
    return profiles.filter((prof) => prof.Id !== Id);
}


export const profilesSlice = createSlice({
    name: 'profiles',
    initialState: initialProfileData,
    reducers: {
        addProfile: (state, action) => addProfileReducer(state, action.payload) ,
        
        updateProfile:(state, action) => updateProfileReducer(state, action.payload) ,

        deleteProfile:(state, action) => deleteProfileReducer(state, action.payload) ,
    }
})

export const {addProfile, updateProfile, deleteProfile} = profilesSlice.actions
export default profilesSlice.reducer