import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../components/paginas/index/IndexPage';
import AnimalPage from '../components/paginas/anúncio/AnimalPage';
import ChatCardsPage from '../components/paginas/chat/ChatCardsPage';
import ConclusionFormPage from '../components/paginas/adoção/ConclusionFormPage';
import AnimalFormPage from '../components/paginas/anúncio/AnimalFormPage';
import ProfilePage from '../components/paginas/perfil/ProfilePage';
import PrivateChatPage from '../components/paginas/chat/PrivateChatPage';
import ProfileCreatePage from '../components/paginas/perfil/ProfileCreatePage';
import ProfileEditPage from '../components/paginas/perfil/ProfileEditPage';

function Rotas() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/index" component={IndexPage}/>
                <Route path="/editarAnuncio/:id" component={() => <AnimalFormPage type='edit'/>}/>
                <Route path="/criarAnuncio" component={() => <AnimalFormPage type='create' />}/>
                <Route path="/chat" component={ChatCardsPage}/>
                <Route path="/animal/:id" component={AnimalPage}/>
                <Route path="/adocao" component={ConclusionFormPage}/>
                <Route path="/perfil" component={ProfilePage}/>
                <Route path="/privateChat" component={PrivateChatPage}/>
                <Route path="/criarPerfil" component={ProfileCreatePage}/>
                <Route path="/editarPerfil" component={ProfileEditPage}/>
            </Switch>
        </Router>
    );
}

export default Rotas;