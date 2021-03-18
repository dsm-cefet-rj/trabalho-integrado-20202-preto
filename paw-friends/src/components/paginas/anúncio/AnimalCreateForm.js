// Componente que recebe um título e renderiza numa linha da página
import React from 'react';

function AnimalCreateForm() {
    const submitFormAnuncio = event =>{
      event.preventDefault();
      alert("Você criou um anúncio")
    }

    return (
        <div className="row d-flex justify-content-center mt-4 mb-5">
            <div className="col-lg-4 col-md-8 col-sm-8 col-10">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={submitFormAnuncio}>
                            <div class="form-group">
                                <label for="InputName">Nome do Animal</label>
                                <input type="text" class="form-control" placeholder="Nome do Animal"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="tipoAnimal">Tipo</label>
                                <select class="form-control">
                                    <option value="ave">Ave</option>
                                    <option value="cachorro">Cachorro</option>
                                    <option value="coelho">Coelho</option>
                                    <option value="cobra">Cobra</option>
                                    <option value="gato">Gato</option>
                                    <option value="hamster">Hamster</option>
                                </select>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputRace">Raça</label>
                                <input type="text" class="form-control" placeholder="Raça"/>
                            </div>
        
                            <div class="form-group mt-2">
                                <label for="InputAge">Idade</label>
                                <input type="number" class="form-control" placeholder="Idade"/>
                            </div>

                            <div class="form-group mt-2">
                                <label for="sexoAnimal">Sexo</label>
                                <select class="form-control">
                                    <option value="ave">Macho</option>
                                    <option value="cachorro">Fêmea</option>
                                </select>
                            </div>

                            <div class="form-group mt-2">
                                <label for="InputDescription">Descrição</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>

                            <div class="image-file mt-2">
                                <label class="custom-file-label">Foto</label>
                                <input type="file" class="custom-file-input"/>
                                <div class="invalid-feedback">Arquivo não válido</div>
                            </div>

                            <button type="submit" className="btn btn-outline-dark mt-3 text-capitalize">Criar anúncio</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
      )
}

export default AnimalCreateForm;
