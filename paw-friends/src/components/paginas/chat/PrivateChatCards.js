import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChatServer, selectAllChats } from "../../../store/reducers/chatReducer";

export default function PrivateChatCards (props) {

    const [chat, setChat] = useState({});
    const dispatch = useDispatch();
    const chats = useSelector(selectAllChats);
    let chatdapagina = chats.filter(state => state.id_user === props.anuncio.id); 
    let mensagens = chatdapagina.map(state => state.msg_sent);  
    if (mensagens[0] === "" || mensagens[0] === undefined ) {
        mensagens = ["Comece agora mesmo o seu chat"];
    };

    console.log(chat);

    function handleInputChange(e) {
            setChat({[e.target.name]: e.target.value, id_user: props.anuncio.id})
            if (e.target.value === "") {
                setChat({[e.target.name]: undefined, id_user: props.anuncio.id})
            }
    };

    function handleSubmit(e){
        e.preventDefault();
        if (chat.msg_sent !== undefined) {
            dispatch(addChatServer(chat))
        }
    };

    return (
        <div className="container-fluid privatechat">
            <div className= "bodychat">
                <div className="container-fluid headerchat fixed">
                    <div className="row">
                            <img alt="" className="col-xs-2 col-md-3 avatarprivate" src={props.anuncio.img} />
                            <div className="col-md-4 animaltitle"> {props.anuncio.nome} </div>
                    </div>
                </div>
                <div className="container-fluid" >
                    <div className="row">
                        <h1>
                            {mensagens.map((mensagem,index) =>  ( 
                                <div className="row">
                                    <h1 key={index} className="chat-msg"> {mensagem}</h1>
                                </div>
                            ))}
                        </h1>
                    </div>    
                </div>
            </div>
            <div className="container-fluid mesagebox fixed-bottom">
                <div className="row chatboxmesage">
                    <input id="msgchatprivate" className="col-9" name="msg_sent" value={chat.msg_sent} type="text" placeholder="type your text" onChange={handleInputChange} />
                    <input className="col-2 btn-send-chat btn btn-outline-dark" type="submit" value="Enviar" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}