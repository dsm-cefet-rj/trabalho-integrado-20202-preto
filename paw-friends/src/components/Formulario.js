// Componente que recebe um título e renderiza numa linha da página
import React from 'react';


function Formulario() {
    const controleAnuncio = event =>{
      event.preventDefault();
      alert("Você criou um anúncio")
    }

    return (
        <div className="formulario">
          <form  onSubmit={controleAnuncio}>
          <fieldset>
              <label>

                  <p>Nome do animal</p>
                  <input nome="nome"/>
                  <br/>

                  <p>Tipo</p>
                      <select name="tipo">
                      <option value="">--Escolha o correspondente--</option>
                      <option value="ave">Ave</option>
                      <option value="cachorro">Cachorro</option>
                      <option value="coelho">Coelho</option>
                      <option value="cobra">Cobra</option>
                      <option value="gato">Gato</option>
                      <option value="hamster">Hamster</option>
                      </select>
                  <p>Raça</p>
                  <input raça="raça"/>
                  <br/>
                  <p>Idade</p>
                  <input idade="idade"/>
                  <br/>
                  <p>Sexo</p>
                  <input sexo="s"/>
                  <br/>
                  <p>Temperamento</p>
                      <select name="temperamento">
                      <option value="">--Escolha o correspondente--</option>
                      <option value="manso">Manso</option>
                      <option value="neutro">Neutro</option>
                      <option value="agressivo">Agressivo</option>
                      </select>
                  <p>Estado</p>
                  <input estado="estado"/>
                  <br/>
                  <p>Cidade</p>
                  <input cidade="cidade"/>
                  <br/>
                  <p>Bairro</p>
                  <input bairro="bairro"/>
                  <br/>
                  <p>Descrição</p>
                  <input descrição="descrição"/>
                  <br/>
                  <p>Foto</p>
                  <input type="file" name="foto"/>
              </label>
          </fieldset>
          <br/>
          <button type="submit">Criar anúncio</button>
          </form>
        </div>
      )
}

export default Formulario;