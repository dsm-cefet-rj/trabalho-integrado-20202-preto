//Form Page from the app

import Navbar from './Navbar'
import PageTitle from './PageTitle'
import PageSubtitle from './PageSubtitle';
import Rating from './Rating';


function Formulario() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"PARABÉNS!"}/>
            <PageSubtitle subtitle={"complete o formulário para concluir a adoção"}/>
            
            
            
            <div className="formulario">
                <form>
                    <fieldset>
                        <label>
                         
                         <p>Avalie o adotando</p>
                            <Rating/>
                            <p>Data da Adoção</p>
                            <input type="date" name="date"/>
                            <br/>
                            <p>Estado</p>
                            <input class="smallbox" type="country" name="estado"/>
                            <br/>
                            <p>Cidade</p>
                            <input name="cidade"/>
                            <br/>
                            <p>Tem algum comentário ou sugestão?</p>
                            <input class="bigbox" type="text" name="texto"/>
                         <br/>
                        </label>
                    </fieldset>
                    <br/>
                    <button>Enviar Formulário</button>
                </form>
            </div>
        </>
    );
}

export default Formulario;