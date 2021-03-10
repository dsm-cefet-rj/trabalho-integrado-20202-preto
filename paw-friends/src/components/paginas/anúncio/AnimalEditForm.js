// Componente que recebe um título e renderiza numa linha da página
import React from 'react';

function AnimalEditForm() {
    const controleAnuncio = event =>{
      event.preventDefault();
      alert("Você editou um anúncio")
    }

    return (
        <div className="animaleditform">
          <form onSubmit={controleAnuncio}>
          <fieldset>
              <label>

                  <p>Nome do animal  <br/>
                  <input nome="nome"/>
                  </p>

                  <p>Tipo <br/>
                      <select name="tipo">
                      <option value="">--Escolha o correspondente--</option>
                      <option value="ave">Ave</option>
                      <option value="cachorro">Cachorro</option>
                      <option value="coelho">Coelho</option>
                      <option value="cobra">Cobra</option>
                      <option value="gato">Gato</option>
                      <option value="hamster">Hamster</option>
                      </select>
                  </p>

                  <p>Raça<br/>
                  <input raça="raça"/>
                  </p>

                  <p>Idade<br/>
                  <input idade="idade"/>
                  </p>

                  <p>Sexo<br/>
                      <select name="sexo">
                      <option value="">--Escolha o sexo do animal--</option>
                      <option value="masculino">Macho</option>
                      <option value="feminino">Fêmea</option>
                      </select>
                  </p>

                  <p>Temperamento<br/>
                      <select name="temperamento">
                      <option value="">--Escolha o temperamento--</option>
                      <option value="manso">Manso</option>
                      <option value="neutro">Neutro</option>
                      <option value="agressivo">Agressivo</option>
                      </select>
                  </p>

                  <p>Estado<br/>
                  <input estado="estado"/>
                  </p>

                  <p>Cidade<br/>
                  <input cidade="cidade"/>
                  </p>

                  <p>Bairro<br/>
                  <input bairro="bairro"/>
                  </p>

                  <p>Descrição<br/>
                  <textarea descrição="descrição"  
                  cols={30}
                  rows={6}
                  />
                  </p>

                  <p>Foto<br/>
                  <input type="file" name="foto"/>
                  </p>
              </label>
          </fieldset>
          <div>
          <button class="btn btn-outline-dark mt-3 text-capitalize" type="submit">Editar anúncio</button>
          <button class="btn btn-outline-danger mt-3 text-capitalize" type="cancel">Cancelar</button>
          </div>
          </form>
        </div>
      )
}

export default AnimalEditForm;
