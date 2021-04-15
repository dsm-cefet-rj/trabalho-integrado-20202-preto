// Componente que recebe um título e renderiza numa linha da página
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory, useParams} from 'react-router-dom';
import {addProfileServer, updateProfileServer, selectProfilesById} from '../../../store/reducers/profilesReducer'
import { profileSchema } from './profileSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

// import useForm from 'react-hook-form'; //

function ProfileForm(props) {

    const typeForm = props.type;
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    const profileById = useSelector(state => selectProfilesById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver:yupResolver(profileSchema)
    });

    const [profileOnLoad] = useState(
        id ? profileById ?? profileSchema.cast({}): profileSchema.cast({}));

    const [actionType, ] = useState(
        id ? profileById
            ? 'profiles/updateProfile'
            : 'profiles/addProfile'
            : 'profiles/addProfile');

    function onSubmit(profile){
        if(actionType === 'profiles/addProfile'){
            dispatch(addProfileServer(profile));
            alert("Você criou sua conta!")
        }else{
            dispatch(updateProfileServer({...profile, id: profileById.id}));
            alert("Você editou sua conta!")
        }
        history.push(`/perfil/${id}`);
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
                                <input type="text" name="nome" defaultValue={profileOnLoad.Nome} ref={register} class="form-control" placeholder="Nome"/>
                                <div style={{color: "red"}}>{errors.Nome?.message}</div>
                            </div>
                            <div class="form-group mt-2">
                                <label for="InputName">Sobrenome</label>
                                <input type="text" name="sobrenome" defaultValue={profileOnLoad.Sobrenome} ref={register} class="form-control" placeholder="Sobrenome"/>
                                <div style={{color: "red"}}>{errors.Sobrenome?.message}</div>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputCPF/CNPJ">CPF ou CNPJ</label>
                                <input type="number" name="cpf" defaultValue={profileOnLoad.CPF} ref={register} class="form-control" placeholder="CPF ou CNPJ"/>
                                <div style={{color: "red"}}>{errors.CPF?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCity">Cidade</label>
                                <input type="text" name="cidade" defaultValue={profileOnLoad.Cidade} ref={register} class="form-control" placeholder="Cidade"/>
                                <div style={{color: "red"}}>{errors.Cidade?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCEP">CEP</label>
                                <input type="number" name="cep" defaultValue={profileOnLoad.CEP} ref={register} class="form-control" placeholder="Insira o CEP"/>
                                <div style={{color: "red"}}>{errors.CEP?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPhone">Telefone</label>
                                <input type="tel" name="telefone" defaultValue={profileOnLoad.Telefone} ref={register} class="form-control" placeholder="Número de Telefone"/>
                                <div style={{color: "red"}}>{errors.Telefone?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputAge">Email</label>
                                <input type="email" name="email" defaultValue={profileOnLoad.Email} ref={register} class="form-control" placeholder="Insira seu Email"/>
                                <div style={{color: "red"}}>{errors.Email?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="tipoAnimal">Nome de Usuário</label>
                                <input type="text" name="user" defaultValue={profileOnLoad.User} ref={register} class="form-control" placeholder="Nome de Usuario" />
                                <div style={{color: "red"}}>{errors.User?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPass">Senha</label>
                                <input type="password" name="senha" defaultValue={profileOnLoad.Senha} ref={register} class="form-control" placeholder="Senha"/>
                                <div style={{color: "red"}}>{errors.Senha?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPassConfirmation">Confirme a Senha</label>
                                <input type="password" name="senha" defaultValue={profileOnLoad.Senha} ref={register} class="form-control" placeholder="Senha"/>
                                <div style={{color: "red"}}>{errors.Senha?.message}</div>
                            </div>

                            <div class="image-file mt-2">
                                <label class="custom-file-label">Foto</label>
                                <input type="file" defaultValue={profileOnLoad.Img} ref={register} class="custom-file-input"/> 
                                <div class="invalid-feedback">Arquivo não válido</div>
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
