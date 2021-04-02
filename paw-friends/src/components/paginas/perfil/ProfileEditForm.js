// Componente que recebe um título e renderiza numa linha da página
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {ProfileData} from './ProfilePage';
// import useForm from 'react-hook-form'; //


function ProfileEditForm(props) {

    const [profile, setProfile] = useState({});

    const history = useHistory();

    function handleInputChange(e){
        setProfile ({...ProfileData, [e.target.name]: e.target.value})            
    }

    function PerfilEditado(event){
        event.preventDefault();
        props.dispatch({type:'update_profile', payload: profile})
        alert("Você editou seu perfil!")
        console.log(ProfileData);
        history.push('/perfil');
    }

    function profileDelete(event){
        event.preventDefault();
        props.dispatch({type:'delete_profile', payload: profile.id})
        alert("Você deletou seu perfil!")
        history.push('/index');
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-4 col-md-8 col-sm-8 col-10">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={PerfilEditado}>
                            <div class="form-group">
                                <label for="InputName">Nome</label>
                                <input type="text" name="nome" value={ProfileData.Nome} onChange={handleInputChange} class="form-control" placeholder="Nome"/>
                            </div>
                            <div class="form-group mt-2">
                                <label for="InputName">Sobrenome</label>
                                <input type="text" name="sobrenome" value={ProfileData.Sobrenome} onChange={handleInputChange} class="form-control" placeholder="Sobrenome"/>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputCPF/CNPJ">CPF ou CNPJ</label>
                                <input type="number" name="cpf" value={ProfileData.CPF} onChange={handleInputChange} class="form-control" placeholder="CPF ou CNPJ"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCity">Cidade</label>
                                <input type="text" name="cidade" value={ProfileData.Cidade} onChange={handleInputChange} class="form-control" placeholder="Cidade"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputCEP">CEP</label>
                                <input type="number" name="cep" value={ProfileData.CEP} onChange={handleInputChange} class="form-control" placeholder="Insira o CEP"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPhone">Telefone</label>
                                <input type="tel" name="telefone" value={ProfileData.Telefone} onChange={handleInputChange} class="form-control" placeholder="Número de Telefone"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputAge">Email</label>
                                <input type="email" name="email" value={ProfileData.Email} onChange={handleInputChange} class="form-control" placeholder="Insira seu Email"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="tipoAnimal">Nome de Usuário</label>
                                <input type="text" name="user" value={ProfileData.User} onChange={handleInputChange} class="form-control" placeholder="Nome de Usuario" />
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPass">Senha</label>
                                <input type="password" name="senha" value={ProfileData.Senha} onChange={handleInputChange} class="form-control" placeholder="Senha"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPassConfirmation">Confirme a Senha</label>
                                <input type="password" name="senha" value={ProfileData.Senha} onChange={handleInputChange} class="form-control" placeholder="Senha"/>
                            </div>

                            <div class="image-file mt-2">
                                <label class="custom-file-label">Foto</label>
                                <input type="file" class="custom-file-input"/>
                                <div class="invalid-feedback">Arquivo não válido</div>
                            </div>

                            <button type="submit" className="button-line btn btn-outline-dark mt-3 text-capitalize">Confirmar edição</button>
                            <Link to="/index"> 
                                <button type="button" className="button-line btn btn-outline-secondary mt-3 text-capitalize">Cancelar</button> 
                            </Link>
                            <button type="button" onClick={profileDelete} className="button-line btn btn-outline-danger mt-3 text-capitalize">Deletar perfil</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
      )
}

export default ProfileEditForm;
