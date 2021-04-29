import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../components/paginas/index/IndexPage';
import AnimalPage from '../components/paginas/anúncio/AnimalPage';
import ChatCardsPage from '../components/paginas/chat/ChatCardsPage';
import ConclusionFormPage from '../components/paginas/adoção/ConclusionFormPage';
import AnimalFormPage from '../components/paginas/anúncio/AnimalFormPage';
import ProfilePage from '../components/paginas/perfil/ProfilePage';
import PrivateChatPage from '../components/paginas/chat/PrivateChatPage';
import ProfileFormPage from '../components/paginas/perfil/ProfileFormPage';
import InitialPage from '../components/paginas/inicio/InitialPage';
import ProfileLoginPage from '../components/paginas/perfil/ProfileLoginPage';


function Rotas() {
    return(
        <Router>
            <Switch>
                <Route path="/index" component={IndexPage}/>
                <Route path="/editarAnuncio/:id" component={() => <AnimalFormPage type='edit'/>}/>
                <Route path="/criarAnuncio" component={() => <AnimalFormPage type='create' />}/>
                <Route path="/chat" component={ChatCardsPage}/>
                <Route path="/animal/:id" component={AnimalPage}/>
                <Route path="/adocao" component={ConclusionFormPage}/>
                <Route path="/profiles/:id" component={ProfilePage}/>
                <Route path="/privateChat/:id" component={PrivateChatPage}/>
                <Route path="/editProfile/:id" component={() => <ProfileFormPage type='edit'/>}/>
                <Route path="/createProfile" component={() => <ProfileFormPage type='create' />}/>
                <Route path="/signup" component={() => <ProfileLoginPage type='create' />}/>
                <Route path="/login" component={() => <ProfileLoginPage type='login' />}/>
                <Route path="/" exact component={InitialPage}/>
            </Switch>
        </Router>
    );
}

export default Rotas;