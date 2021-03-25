import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addAnunciosServer, updateAnunciosServer, selectAnunciosById } from '../../../store/reducers/anunciosReducer';
import { animalSchema } from './AnimalSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

function AnimalForm(props) {
    const typeForm = props.type;
    const history = useHistory();
    const dispatch = useDispatch()
    let { id } = useParams();
    id = parseInt(id);
    const anuncioById = useSelector(state => selectAnunciosById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver:yupResolver(animalSchema)
    });
    
    const [anuncio] = useState(
        id ? anuncioById ?? animalSchema.cast({}) : animalSchema.cast({}));

    const [actionType, ] = useState(id ? anuncioById 
        ? 'anuncios/updateAnuncio'
        : 'anuncios/addAnuncio'
        : 'anuncios/addAnuncio'
        );

    

    const onSubmit = (anuncio) => {
        let dataAtual = new Date();
        anuncio.dataAnuncio = dataAtual.toString();

        if(actionType === 'anuncios/addAnuncio'){
            dispatch(addAnunciosServer(anuncio));
            history.push('/index');
        }else{
            dispatch(updateAnunciosServer({...anuncio, id: anuncioById.id}));
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
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="InputName">Nome do Animal</label>
                                <input type="text" className="form-control" placeholder="Nome do Animal" name="nome" defaultValue={anuncio.nome} ref={register}></input>
                                <div style={{color: "red"}}>{errors.nome?.message}</div>
                            </div>

                            <div class="form-group">
                                <label for="InputType">Tipo do Animal</label>
                                <input type="text" class="form-control" placeholder="Tipo" name="tipo" defaultValue={anuncio.tipo} ref={register}></input>
                                <div style={{color: "red"}}>{errors.tipo?.message}</div>
                            </div>


                            <div class="form-group mt-2">
                                <label for="InputRace">Raça</label>
                                <input type="text" class="form-control" placeholder="Raça" name="raça" defaultValue={anuncio.raça} ref={register}></input>
                                <div style={{color: "red"}}>{errors.raça?.message}</div>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputAge">Idade</label>
                                <input type="number" class="form-control" placeholder="Idade" name="idade" defaultValue={anuncio.idade} ref={register}></input>
                                <div style={{color: "red"}}>{errors.idade?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="sexoAnimal">Sexo</label>
                                <input type="text" class="form-control" placeholder="Sexo" name="sexo" defaultValue={anuncio.sexo} ref={register}></input>
                                <div style={{color: "red"}}>{errors.sexo?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="temperamento">Temperamento</label>
                                <input class="form-control" name="temperamento" placeholder="Temperamento" defaultValue={anuncio.temperamento} ref={register}></input>
                                <div style={{color: "red"}}>{errors.temperamento?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="temperamento">Descrição no Card</label>
                                <input class="form-control" name="cardDescricao" placeholder="Descrição no Card" defaultValue={anuncio.cardDescricao} ref={register}></input>
                                <div style={{color: "red"}}>{errors.cardDescricao?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputDescription">Descrição</label>
                                <textarea class="form-control" rows="3" name="descricao" placeholder="Descrição" defaultValue={anuncio.descricao} ref={register}></textarea>
                                <div style={{color: "red"}}>{errors.descricao?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label class="custom-file-label">URL Foto</label>
                                <input type="text" class="form-control" placeholder="URL" name="img" defaultValue={anuncio.img} ref={register}></input>
                                <div style={{color: "red"}}>{errors.img?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="usuario">Usuario</label>
                                <input type="text" class="form-control" placeholder="Usuario" name="usuario" defaultValue={anuncio.usuario} ref={register}></input>
                                <div style={{color: "red"}}>{errors.usuario?.message}</div>
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