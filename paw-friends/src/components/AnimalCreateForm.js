// Componente que recebe um título e renderiza numa linha da página
import React from 'react';

function AnimalCreateForm() {
    const controleAnuncio = event =>{
      event.preventDefault();
      alert("Você criou um anúncio")
    }

    return (
        <div className="animalcreateform">
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
                  cols={48}
                  rows={6}
                  />
                  </p>

                  <p>Foto<br/>
                  <input type="file" name="foto"/>
                  </p>
              </label>
          </fieldset>
          <button class="btn btn-outline-dark mt-3 text-capitalize" type="submit">Criar anúncio</button>
          </form>
        </div>
      )
}

export default AnimalCreateForm;



/*
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="nome" placeholder="Nome do Animal" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Tipo</Form.Label>
    <Form.Control as="select">
      <option value='cachorro'>Cachorro</option>
      <option value='calopsita'>Calopsita</option>
      <option value='coelho'>Coelho</option>
      <option value='cobra'>Cobra</option>
      <option value='gato'>Gato</option>
      <option value='hamster'>Hamster</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Raça</Form.Label>
    <Form.Control type="raça" placeholder="Raça do Animal" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Idade</Form.Label>
    <Form.Control type="number" placeholder="Idade do animal" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Sexo</Form.Label>
    <Form.Control as="select" multiple>
      <option value='masculino'>Macho</option>
      <option value='feminino'>Fêmea</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Temperamento</Form.Label>
    <Form.Control as="select" multiple>
      <option value='agressivo'>Agressivo</option>
      <option value='neutro'>Neutro</option>
      <option value='manso'>Manso</option>
    </Form.Control>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Estado</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Cidade</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Bairro</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>  

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Descrição</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Foto do Animal" />
  </Form.Group>

  <Button variant="primary" type="submit">Criar Anúncio</Button>

</Form>

*/