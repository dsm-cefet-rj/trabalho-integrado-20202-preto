import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../components/paginas/index/IndexPage';
import AnimalPage from '../components/paginas/anúncio/AnimalPage';
import ChatCardsPage from '../components/paginas/chat/ChatCardsPage';
import ConclusionFormPage from '../components/paginas/adoção/ConclusionFormPage';
import AnimalFormPage from '../components/paginas/anúncio/AnimalFormPage';
import ProfilePage from '../components/paginas/perfil/ProfilePage';
import PrivateChatPage from '../components/paginas/chat/PrivateChatPage';

function Rotas() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/index" component={IndexPage}/>
                <Route path="/editarAnuncio" component={AnimalFormPage}/>
                <Route path="/criarAnuncio" component={AnimalFormPage}/>
                <Route path="/chat" component={ChatCardsPage}/>
                <Route path="/animal/:id" component={AnimalPage}/>
                <Route path="/adocao" component={ConclusionFormPage}/>
                <Route path="/perfil" component={ProfilePage}/>
                <Route path="/privateChat" component={PrivateChatPage}/>
            </Switch>
        </Router>
    );
}

export default Rotas;