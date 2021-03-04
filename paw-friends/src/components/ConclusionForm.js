import Rating from './Rating';

function ConclusionForm() {
    return (
        <div className="animaleditform">
            <form>
                <fieldset>
                    <label>
                        <p>Avalie o adotando</p>
                        <Rating />
                        <p>Data da Adoção</p>
                        <input type="date" name="date" />
                        <br />
                        <p>Estado</p>
                        <input class="smallbox" type="country" name="estado" />
                        <br />
                        <p>Cidade</p>
                        <input name="cidade" />
                        <br />
                        <p>Tem algum comentário ou sugestão?</p>
                        <input class="bigbox" type="text" name="texto" />
                        <br />
                    </label>
                </fieldset>
                <br />
                <button>Enviar Formulário</button>
            </form>
        </div>
    );
}

export default ConclusionForm;