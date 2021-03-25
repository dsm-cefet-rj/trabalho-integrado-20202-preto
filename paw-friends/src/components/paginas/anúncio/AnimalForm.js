import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addAnunciosServer, updateAnunciosServer, selectAnunciosById } from '../../../store/reducers/anunciosReducer';

function AnimalForm(props) {
    const typeForm = props.type;
    const history = useHistory();
    const dispatch = useDispatch()
    let { id } = useParams();
    id = parseInt(id);
    const anuncioById = useSelector(state => selectAnunciosById(state, id))
    const [anuncio, setAnuncio] = useState(
        id ? anuncioById ?? {} : {});

    const [actionType, ] = useState(id ? anuncioById 
        ? 'anuncios/updateAnuncio'
        : 'anuncios/addAnuncio'
        : 'anuncios/addAnuncio'
        );

    //aqui vai a operação com o form
    function handleInputChange(e) {

        setAnuncio( {...anuncio, [e.target.name]: e.target.value} );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(actionType === 'anuncios/addAnuncio'){
            let dataAtual = new Date();
            anuncio.dataAnuncio = dataAtual.toString();
            dispatch(addAnunciosServer(anuncio));
            history.push('/index');
        }else{
            dispatch(updateAnunciosServer(anuncio));
            history.push(`/animal/${id}`);
        }
    }

    //muda mensagem do botao
    let buttonMessage = '';
    if(typeForm === 'edit'){
        buttonMessage = 'Editar Anúncio';
    }else{
        buttonMessage = 'Cadastrar Anúncio';
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-4 col-md-8 col-sm-8 col-10">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="InputName">Nome do Animal</label>
                                <input type="text" class="form-control" placeholder="Nome do Animal" name="nome" defaultValue={anuncio.nome} onChange={handleInputChange}></input>
                            </div>

                            <div class="form-group">
                                <label for="InputType">Tipo do Animal</label>
                                <input type="text" class="form-control" placeholder="Tipo" name="tipo" defaultValue={anuncio.tipo} onChange={handleInputChange}></input>
                            </div>


                            <div class="form-group mt-2">
                                <label for="InputRace">Raça</label>
                                <input type="text" class="form-control" placeholder="Raça" name="raça" defaultValue={anuncio.raça} onChange={handleInputChange}></input>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputAge">Idade</label>
                                <input type="number" class="form-control" placeholder="Idade" name="idade" defaultValue={anuncio.idade} onChange={handleInputChange}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="sexoAnimal">Sexo</label>
                                <input type="text" class="form-control" placeholder="Sexo" name="sexo" defaultValue={anuncio.sexo} onChange={handleInputChange}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="temperamento">Temperamento</label>
                                <input class="form-control" name="temperamento" defaultValue={anuncio.temperamento} onChange={handleInputChange}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="temperamento">Descrição Card</label>
                                <input class="form-control" name="cardDescricao" defaultValue={anuncio.cardDescricao} onChange={handleInputChange}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputDescription">Descrição</label>
                                <textarea class="form-control" rows="3" name="descricao" defaultValue={anuncio.descricao} onChange={handleInputChange}></textarea>
                            </div>

                            <div class="form-group mt-2">
                                <label class="custom-file-label">URL Foto</label>
                                <input type="text" class="form-control" placeholder="URL" name="img" defaultValue={anuncio.img} onChange={handleInputChange}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="usuario">Usuario</label>
                                <input type="text" class="form-control" placeholder="Usuario" name="usuario" defaultValue={anuncio.usuario} onChange={handleInputChange}></input>
                            </div>

                            <button type="submit" className="btn btn-outline-dark mt-3 text-capitalize">{buttonMessage}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
      )
}

export default AnimalForm;