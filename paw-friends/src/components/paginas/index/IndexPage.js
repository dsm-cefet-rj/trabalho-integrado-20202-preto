import Navbar from '../../layouts/navbar/Navbar'
import Card from './Card'
import PageTitle from '../../layouts/PageTitle'
import { useSelector } from 'react-redux'

export default function IndexPage() {
    const anuncios = useSelector(state => state.anuncios);
    const status = anuncios.status;
    const error = anuncios.error;
    var pageTitle = '';
    let anunciosRow = null;

    if(status === 'loaded'){
        pageTitle = 'Animais para adoção';
        anunciosRow = anuncios.anunciosObjs.map((anuncio) => {
            return <Card key={anuncio.key} anuncio={anuncio}/>;
        });
    }
    else if(status == 'loading'){
        pageTitle = 'Carregando anúncios';
    }
    else if(status == 'failed'){
        pageTitle = 'Erro! ' + error;
    }

    return (
        <>
            <Navbar />
            <PageTitle title={pageTitle} />
            <div className="container-fluid container-cards">
                <div className="row d-flex justify-content-center mb-5">
                    {anunciosRow}
                </div>
            </div>
        </>
    );
}