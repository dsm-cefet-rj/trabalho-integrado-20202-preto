import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnuncios, selectAnunciosById } from '../../../store/reducers/anunciosReducer';
import { useLayoutEffect } from 'react';

export default function PrivateChatCards () {

    const status = useSelector(state => state.anuncios.status);
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    useLayoutEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchAnuncios());
        }
    }, [status, dispatch]);

    const anuncio = useSelector(state => selectAnunciosById(state, id));


    return (
        <div className="container-fluid privatechat">
        <div className="container-fluid headerchat fixed">
            <div className="row">
                    <img alt="" className="col-xs-2 col-md-3 avatarprivate" src={anuncio.img} />
                    <div className="col-md-4 animaltitle"> {anuncio.nome} </div>
            </div>
        </div>
        <div className="container-fluid mesagebox fixed-bottom">
            <div className="row chatboxmesage">
                <input className="col-9" type="text" placeholder="type your mesage" />
                <input className="col-2 btn-send-chat btn btn-outline-dark" type="submit" value="Enviar"/>
            </div>
        </div>
        </div>
    )
}