import Navbar from '../../layouts/navbar/Navbar'
import Card from './Card'
import PageTitle from '../../layouts/PageTitle'
import { connect } from 'react-redux'
import * as AnuncioActions from '../../../store/actions/anuncio'

function IndexPage({ anuncios , clickMaisInfos }) {
    return (
        <>
            <Navbar />
            <PageTitle title={"Animais para adoção"} />
            <div className="container-fluid container-cards">
                <div class="row d-flex justify-content-center mb-5">
                    {anuncios.map((anuncio) => {
                        return <Card anuncio={anuncio} clickMaisInfos={clickMaisInfos}/>;
                    })}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    anuncios: state.anuncios
});

const mapDispatchToProps = dispatch => ({
    clickMaisInfos: (anuncio) => dispatch(AnuncioActions.clickCardIndex(anuncio.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);