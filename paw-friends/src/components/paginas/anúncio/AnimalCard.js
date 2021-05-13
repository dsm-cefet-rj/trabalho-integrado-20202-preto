import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAnuncioServer } from "../../../store/reducers/anunciosReducer";
import { deleteChatServer } from "../../../store/reducers/chatReducer";
import PageTitle from "../../layouts/PageTitle";

function AnimalCard(props) {
    let anuncio = props.anuncio;
    let chats = props.chats;
    const dispatch = useDispatch();

    //segura o componente vazio até o estado mudar
    if (anuncio === undefined) {
        anuncio = {};
    }

    //cast da data de string para Date obj
    var dataStr = anuncio.dataAnuncio;
    const dataObj = new Date(dataStr);

    //Definindo vetor com ids referentes ao chat do anuncio
    let chatsdoanuncio = chats.filter(state => state.id_user === anuncio.id );
    var idsdoschats = chatsdoanuncio.map (state => state.id)
    console.log(idsdoschats);

    //função de exclusão dos chats e anuncios
    function handleDeleteChats (id) {
        dispatch(deleteChatServer(id))
    };

    function handleDeleteAnuncio(id){
        dispatch(deleteAnuncioServer(id));
    };

    function handleDeleteCorrespondente () {
        handleDeleteAnuncio(anuncio.id);
        idsdoschats.forEach(handleDeleteChats);
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                <PageTitle title={anuncio.nome} />
                <div className="card mb-3">
                    <img className="card-img-top" src={anuncio.img} alt="Animal" />
                    <div className="card-body">
                        <h5 className="card-title mt-2">Tipo: </h5>
                        <p className="card-text">{anuncio.tipo}</p>
                        
                        <h5 className="card-title mt-2">Raça: </h5>
                        <p className="card-text">{anuncio.raça}</p>

                        <h5 className="card-title ">Idade: </h5>
                        <p className="card-text">{anuncio.idade}</p>

                        <h5 className="card-title mt-2">Sexo: </h5>
                        <p className="card-text">{anuncio.sexo}</p>

                        <h5 className="card-title mt-2">Temperamento: </h5>
                        <p className="card-text">{anuncio.temperamento}</p>

                        <h5 className="card-title">Descrição: </h5>
                        <p className="card-text">{anuncio.descricao}</p>

                        <p className="card-text">
                            <small className="text-muted">
                                Postado em {dataObj.toString()}
                            </small></p>
                        
                        
                        <div className="row text-center justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                                <Link to={`/privateChat/${anuncio.id}`}>
                                    <button className="btn btn-outline-dark m-2">Adotar</button>
                                </Link>
                                <Link to={`/editarAnuncio/${anuncio.id}`}>
                                    <button className="btn btn-outline-dark m-2">Editar</button>
                                </Link>
                                <Link to='/index'>
                                    <button className="btn btn-outline-danger m-2" onClick={handleDeleteCorrespondente}>Deletar</button>
                                </Link>
                                <Link to='/index'>
                                    <button className="btn btn-outline-success m-2">Finalizar Adoção</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimalCard;