import Navbar from '../../layouts/navbar/Navbar'
import Card from './Card'
import PageTitle from '../../layouts/PageTitle'
import { useSelector } from 'react-redux'

export default function IndexPage() {
    //const anuncios = useSelector(state => state.anuncios.anunciosObjs)
    //const [anuncios, setAnuncios] = useState({})
    const anuncios = useSelector(state => state.anuncios.anunciosObjs);

    return (
        <>
            <Navbar />
            <PageTitle title={"Animais para adoção"} />
            <div className="container-fluid container-cards">
                <div className="row d-flex justify-content-center mb-5">
                    {anuncios.map((anuncio) => {
                        return <Card key={anuncio.key} anuncio={anuncio}/>;
                    })}
                </div>
            </div>
        </>
    );
}