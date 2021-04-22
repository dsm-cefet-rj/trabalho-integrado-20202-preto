// Componente que recebe um título e renderiza numa linha da página
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory, useParams} from 'react-router-dom';
import {addProfileServer, updateProfileServer, selectProfilesById} from '../../../store/reducers/profilesReducer'
import { profileSchema } from './profileSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { unwrapResult } from '@reduxjs/toolkit'

// import useForm from 'react-hook-form'; //

function ProfileForm(props) {

    const typeForm = props.type;
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();



    const profileById = useSelector(state => selectProfilesById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver:yupResolver(profileSchema)
    });

    const [profile] = useState(
        id ? profileById ?? profileSchema.cast({}): profileSchema.cast({}));


    const onSubmit = (profile) => {
        console.log("teste de clique");
        if(typeForm === 'create'){
            dispatch(addProfileServer(profile))
            .then(unwrapResult)
            .then(profnovo => {history.push(`/profile/${profnovo.id}`)})
            alert("Você criou sua conta!")
        }else{
            dispatch(updateProfileServer({...profile, id: profileById.id}))
            .then(unwrapResult)
            .then(profnovo => {history.push(`/profile/${profnovo.id}`)})
            alert("Você editou sua conta!")
        }
    }

    let buttonMessage = '';
    if(typeForm === 'edit'){
        buttonMessage = 'Editar Perfil';
    }else{
        buttonMessage = 'Cadastrar Perfil';
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-4 col-md-8 col-sm-8 col-10">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label for="InputName">Nome</label>
                                <input type="text" class="form-control" placeholder="Nome" name="nome" defaultValue={profile.nome} ref={register}></input>
                                <div style={{color: "red"}}>{errors.nome?.message}</div>
                            </div>
                            <div class="form-group mt-2">
                                <label for="InputName">Sobrenome</label>
                                <input type="text" class="form-control" placeholder="Sobrenome" name="sobrenome" defaultValue={profile.sobrenome} ref={register}></input>
                                <div style={{color: "red"}}>{errors.sobrenome?.message}</div>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputCPF/CNPJ">CPF ou CNPJ</label>
                                <input type="number" class="form-control" placeholder="CPF ou CNPJ" name="cpf" defaultValue={profile.cpf} ref={register}></input>
                                <div style={{color: "red"}}>{errors.cpf?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCity">Cidade</label>
                                <input type="text" class="form-control" placeholder="Cidade" name="cidade" defaultValue={profile.cidade} ref={register}></input>
                                <div style={{color: "red"}}>{errors.cidade?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCEP">CEP</label>
                                <input type="number" class="form-control" placeholder="Insira o CEP" name="cep" defaultValue={profile.cep} ref={register}></input>
                                <div style={{color: "red"}}>{errors.cep?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPhone">Telefone</label>
                                <input type="tel" class="form-control" placeholder="Número de Telefone" name="telefone" defaultValue={profile.telefone} ref={register}></input>
                                <div style={{color: "red"}}>{errors.telefone?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputAge">Email</label>
                                <input type="email" class="form-control" placeholder="Insira seu Email" name="email" defaultValue={profile.email} ref={register}></input>
                                <div style={{color: "red"}}>{errors.email?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="tipoAnimal">Nome de Usuário</label>
                                <input type="text" class="form-control" placeholder="Nome de Usuario" name="user" defaultValue={profile.user} ref={register}></input>
                                <div style={{color: "red"}}>{errors.user?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPass">Senha</label>
                                <input type="password" class="form-control" placeholder="Senha" name="senha" defaultValue={profile.senha} ref={register}></input>
                                <div style={{color: "red"}}>{errors.senha?.message}</div>
                            </div>

                            <div class="image-file mt-2">
                                <label class="custom-file-label">URL da Foto</label>
                                <input type="text"  class="form-control" placeholder="URL" name="img" defaultValue={profile.img} ref={register}></input>
                                <div style={{color: "red"}}>{errors.img?.message}</div>
                            </div>

                            <button type="submit" className="button-line btn btn-outline-dark mt-3 text-capitalize">{buttonMessage}</button>
                         
                            <Link to="/index"> 
                                <button type="button" className="button-line btn btn-outline-danger mt-3 text-capitalize">Cancelar</button> 
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
      )
}

export default ProfileForm;
