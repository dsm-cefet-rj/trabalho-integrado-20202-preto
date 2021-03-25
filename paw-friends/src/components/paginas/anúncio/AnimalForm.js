import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addAnunciosServer, updateAnunciosServer, selectAnunciosById } from '../../../store/reducers/anunciosReducer';

function AnimalForm(props) {
    const history = useHistory();
    const dispatch = useDispatch()
    let { id } = useParams();
    id = parseInt(id);
    const anuncioById = useSelector(state => selectAnunciosById(state, id))

    const [anuncio, setAnuncio] = useState(
        id ? anuncioById ?? {} : {});

    const [actionType, ] = useState(
        id ? anuncioById 
                ? 'anuncios/updateAnuncio'
                : 'anuncios/addAnuncio'
                : 'anuncios/addAnuncio');

    //aqui vai a operação com o form
    function handleInputChange(e) {
        setAnuncio( {...anuncio, [e.target.name]: e.target.value} );
    }


    function handleSubmit(e){
        e.preventDefault();
        if(actionType === 'anuncios/addAnuncio'){
            dispatch(addAnunciosServer(anuncio));
        }else{
            dispatch(updateAnunciosServer(anuncio));
        }
        
        history.push('/anuncios');
    }

    //muda mensagem do botao
    let buttonMessage = '';
    if(props.type === 'edit'){
        buttonMessage = 'Editar Anúncio';
    }else{
        buttonMessage = 'Cadastrar Anúncio';
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-4 col-md-8 col-sm-8 col-10">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="InputName">Nome do Animal</label>
                                <input type="text" class="form-control" placeholder="Nome do Animal" value={anuncio.nome}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="tipoAnimal">Tipo</label>
                                <select class="form-control">
                                    <option value="ave">Ave</option>
                                    <option value="cachorro">Cachorro</option>
                                    <option value="coelho">Coelho</option>
                                    <option value="cobra">Cobra</option>
                                    <option value="gato">Gato</option>
                                    <option value="hamster">Hamster</option>
                                </select>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputRace">Raça</label>
                                <input type="text" class="form-control" placeholder="Raça" value={anuncio.raça}></input>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputAge">Idade</label>
                                <input type="number" class="form-control" placeholder="Idade" value={anuncio.idade}></input>
                            </div>

                            <div class="form-group mt-2">
                                <label for="sexoAnimal">Sexo</label>
                                <select class="form-control">
                                    <option value="ave">Macho</option>
                                    <option value="cachorro">Fêmea</option>
                                </select>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputDescription">Descrição</label>
                                <textarea class="form-control" rows="3" value={anuncio.descricao}></textarea>
                            </div>

                            <div class="form-group mt-2">
                                <label class="custom-file-label">URL Foto</label>
                                <input type="text" class="form-control" placeholder="URL" value={anuncio.img}></input>
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