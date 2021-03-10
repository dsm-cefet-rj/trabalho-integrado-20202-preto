import Navbar from '../../layouts/navbar/Navbar'
import CardGrid from './CardGrid'
import PageTitle from '../../layouts/PageTitle'

const CardList = [
    {
        CardImg: 'https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg',
        CardTitle: 'Salvador',
        CardDescription: 'Descrição 1'
    },
    {
        CardImg: 'https://www.petlove.com.br/images/breeds/192471/profile/original/yorkshire-p.jpg?1532539683',
        CardTitle: 'Maick',
        CardDescription: 'Descrição 2'
    },
    {
        CardImg: 'https://i.pinimg.com/originals/0c/e8/cd/0ce8cddcbbb19d11199fa8ae2d81927f.jpg',
        CardTitle: 'Laurita',
        CardDescription: 'Descrição 3'
    },
    {
        CardImg: 'https://www.petlove.com.br/images/breeds/192401/profile/original/srd-p.jpg?1532539578',
        CardTitle: 'Bituco',
        CardDescription: 'Descrição 4'
    }
];

function IndexPage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"Animais para adoção"}/>
            <div className="container-fluid container-cards">
                <CardGrid CardList={CardList}/>
            </div>
        </>
    );
}

export default IndexPage;