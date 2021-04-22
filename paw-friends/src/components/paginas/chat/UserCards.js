//referente ao card presente na tela de chat
//card onde vai mostrar com quem se esta tendo a conversa
import React from "react";
import { Link } from 'react-router-dom'

function UserCards(props) {
  return (
      <>
          <div className="col-10 col-sm-6 col-md-4 col-lg-4 mt-4 d-flex justify-content-center">
              <div className="card">
                  <img className="card-img-top"
                      src={props.anuncio.img}
                      alt="Card cap" />
                  <div className="card-body text-center">
                      <h5 className="card-title">{props.anuncio.nome}</h5>
                      <p className="card-text">{props.anuncio.cardDescricao}</p>
                      <Link to={`/privateChat/${props.anuncio.id}`}>            
                        <button className="btn btn-outline-dark text-capitalize">Abrir Chat</button>
                      </Link>
                  </div>
              </div>
          </div>
      </>
  );
}
  
  export default UserCards;