import React, { useState } from "react";


export default function PrivateChatCards (props) {

    const [chat, setChat] = useState({});

    function handleInputChange(e) {
        setChat( {...chat, [e.target.name]: e.target.value})
    };

    function handleSubmit(e){
        e.preventDefault();
        props.setChats(props.chats.concat(chat.msg_received))
    };

    return (
        <div className="container-fluid privatechat">
        <div className="container-fluid headerchat fixed">
            <div className="row">
                    <img alt="" className="col-xs-2 col-md-3 avatarprivate" src={props.anuncio.img} />
                    <div className="col-md-4 animaltitle"> {props.anuncio.nome} </div>
            </div>
        </div>
        <div className="container-fluid body-chat-middle" >
            <div className="row">
            
            </div>
        </div>
        <div className="container-fluid mesagebox fixed-bottom">
            <div className="row chatboxmesage">
                <input id="msgchatprivate" className="col-9" name="msg_received" value={chat.msg_received} type="text" placeholder="type your text" onChange={handleInputChange} />
                <input className="col-2 btn-send-chat btn btn-outline-dark" type="submit" value="Enviar" onClick={handleSubmit} />
            </div>
        </div>
        </div>
    )
}