
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

export default function profilesReducer(profiles = initialProfileData , action){
    switch(action.type){
        case 'add_profile':
            let proxId = 1 + profiles.map(prof => prof.Id).reduce((x,y)=> Math.max(x,y));
            return profiles.concat ([{...action.payload, id:proxId}]);

        case 'update_profile':
            let index = profiles.map(prof => prof.Id).indexOf(action.payload.Id);
            let profilesUpdated = profiles.slice();
            profilesUpdated.splice(index, 1, action.payload);
            return profilesUpdated;

        case 'delete_profile':
            return profiles.filter((prof) => prof.Id !== action.payload);

        default:
            return profiles;

    }

}