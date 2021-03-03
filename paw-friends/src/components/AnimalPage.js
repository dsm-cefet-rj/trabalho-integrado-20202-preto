import Navbar from './Navbar'
import PageTitle from './PageTitle'
import AnimalCard from './AnimalCard'

/* Esse componente é referente a página completa do anuncio de um animal */

/* Estrutura de dados referente a um animal */
const AnimalData = {
        Img: 'https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg',
        Nome: 'Salvador',
        Idade: 3,
        Raça: 'Qualquer uma',
        Sexo: 'Macho',
        Temperamento: 'Agitado',
        Post: {
            PostDate: '12/10/2020',
            PostCity:'Macaé',
            PostState:'Rio de Janeiro'
        },
        Description: 'Descrição do salvador',
        UserOwner:'root',
    };

function AnimalPage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={AnimalData.Nome}/>
            <div class="container-fluid container-cards">
                <AnimalCard AnimalData={AnimalData}/>
            </div>
        </>
    );
}

export default AnimalPage;