// Componente que recebe um título e renderiza numa linha da página
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory, useParams} from 'react-router-dom';
import {addProfileServer, updateProfileServer, selectProfilesById} from '../../../store/reducers/profilesReducer'
import { useForm } from "react-hook-form";

// import useForm from 'react-hook-form'; //


function ProfileForm(props) {

    const typeForm = props.type;
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    const profileById = useSelector(state => selectProfilesById(state, id))

    const [profile, setProfile] = useState(
        id ? profileById ?? {} : {});

    const [actionType, ] = useState(
        id ? profileById
            ? 'profiles/updateProfile'
            : 'profiles/addProfile'
            : 'profiles/addProfile');

    function handleInputChange(e){
        setProfile ({...profile, [e.target.name]: e.target.value})            
    }

    function PerfilCriado(e){
        e.preventDefault();
        if(actionType === 'profiles/addProfile'){
            dispatch(addProfileServer(profile));
            alert("Você criou sua conta!")
        }else{
            dispatch(updateProfileServer(profile));
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
                        <form onSubmit={PerfilCriado}>
                            <div class="form-group">
                                <label for="InputName">Nome</label>
                                <input type="text" name="nome" value={profile.Nome} onChange={handleInputChange} class="form-control" placeholder="Nome"/>
                            </div>
                            <div class="form-group mt-2">
                                <label for="InputName">Sobrenome</label>
                                <input type="text" name="sobrenome" value={profile.Sobrenome} onChange={handleInputChange} class="form-control" placeholder="Sobrenome"/>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputCPF/CNPJ">CPF ou CNPJ</label>
                                <input type="number" name="cpf" value={profile.CPF} onChange={handleInputChange} class="form-control" placeholder="CPF ou CNPJ"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCity">Cidade</label>
                                <input type="text" name="cidade" value={profile.Cidade} onChange={handleInputChange} class="form-control" placeholder="Cidade"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCEP">CEP</label>
                                <input type="number" name="cep" value={profile.CEP} onChange={handleInputChange} class="form-control" placeholder="Insira o CEP"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPhone">Telefone</label>
                                <input type="tel" name="telefone" value={profile.Telefone} onChange={handleInputChange} class="form-control" placeholder="Número de Telefone"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputAge">Email</label>
                                <input type="email" name="email" value={profile.Email} onChange={handleInputChange} class="form-control" placeholder="Insira seu Email"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="tipoAnimal">Nome de Usuário</label>
                                <input type="text" name="user" value={profile.User} onChange={handleInputChange} class="form-control" placeholder="Nome de Usuario" />
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPass">Senha</label>
                                <input type="password" name="senha" value={profile.Senha} onChange={handleInputChange} class="form-control" placeholder="Senha"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPassConfirmation">Confirme a Senha</label>
                                <input type="password" name="senha" value={profile.Senha} onChange={handleInputChange} class="form-control" placeholder="Senha"/>
                            </div>

                            <div class="image-file mt-2">
                                <label class="custom-file-label">Foto</label>
                                <input type="file" value={profile.Img} onChange={handleInputChange} class="custom-file-input"/> 
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
