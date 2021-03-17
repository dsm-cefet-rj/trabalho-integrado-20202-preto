import Navbar from '../../layouts/navbar/Navbar'
import Card from './Card'
import PageTitle from '../../layouts/PageTitle'
import { connect } from 'react-redux'
import * as AnuncioActions from '../../../store/actions/anuncios'
import { bindActionCreators } from 'redux'

function IndexPage({ anuncios , clickCardIndex }) {
    return (
        <>
            <Navbar />
            <PageTitle title={"Animais para adoção"} />
            <div className="container-fluid container-cards">
                <div className="row d-flex justify-content-center mb-5">
                    {anuncios.map((anuncio) => {
                        return <Card key={anuncio.key} anuncio={anuncio} clickMaisInfos={clickCardIndex}/>;
                    })}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    anuncios: state.anuncios.anunciosObjs
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(AnuncioActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);