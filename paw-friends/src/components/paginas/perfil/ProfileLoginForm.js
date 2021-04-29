import React, {useEffect} from 'react';
import {useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {loginServer} from '../../../store/reducers/loginReducer';
import {Link} from 'react-router-dom';

export default function LoginForm(props){

    const history = useHistory();
    const dispatch = useDispatch()
    const status = useSelector(state => state.logins.status);

    const { register, handleSubmit, errors } = useForm(/*{
            resolver: yupResolver(profileSchema)
        }*/);

    function onSubmit(login){
        console.log(login);
        dispatch(loginServer(login));
    }


    useEffect(() => {
        if (status === 'logged_in' ) {
            history.push('/index');
        }
    }, [status])

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-4 col-md-8 col-sm-8 col-10">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-group mt-2">
                                <label for="InputUser">Nome de Usuário</label>
                                <input type="text" class="form-control" placeholder="Nome de Usuario" name="username" ref={register}></input>
                                <div style={{color: "red"}}>{errors.username?.message}</div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputPass">Senha</label>
                                <input type="password" class="form-control" placeholder="Senha" name="password" ref={register}></input>
                                <div style={{color: "red"}}>{errors.password?.message}</div>
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