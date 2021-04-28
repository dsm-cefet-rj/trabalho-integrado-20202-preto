import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory, useParams} from 'react-router-dom';
import {addProfileServer, updateProfileServer, selectProfilesById} from '../../../store/reducers/profilesReducer'
import { profileSchema } from './profileSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { unwrapResult } from '@reduxjs/toolkit'

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

                            <div class="form-group mt-2">
                                <label for="InputUser">Nome de Usuário</label>
                                <input type="text" class="form-control" placeholder="Nome de Usuario" name="user" defaultValue={profile.user} ref={register}></input>
                                <div style={{color: "red"}}>{errors.user?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPass">Senha</label>
                                <input type="password" class="form-control" placeholder="Senha" name="senha" defaultValue={profile.senha} ref={register}></input>
                                <div style={{color: "red"}}>{errors.senha?.message}</div>
                            </div>

                            <button type="submit" className="button-line btn btn-outline-dark mt-3 text-capitalize">Entrar</button>

                            <Link to="/inicio"> 
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
