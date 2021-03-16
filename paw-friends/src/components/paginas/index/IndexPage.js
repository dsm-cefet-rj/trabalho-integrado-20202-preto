import Navbar from '../../layouts/navbar/Navbar'
import CardGrid from './CardGrid'
import PageTitle from '../../layouts/PageTitle'

function IndexPage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"Animais para adoção"}/>
            <div className="container-fluid container-cards">
                <CardGrid/>
            </div>
        </>
    );
}

export default IndexPage;