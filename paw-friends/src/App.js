import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

import IndexPage from './components/paginas/index/IndexPage';
import AnimalPage from './components/paginas/anúncio/AnimalPage';
import AnimalCreatePage from './components/paginas/anúncio/AnimalCreatePage';
import ChatPage from './components/paginas/chat/ChatPage';
import ConclusionFormPage from './components/paginas/adoção/ConclusionFormPage';
import AnimalEditPage from './components/paginas/anúncio/AnimalEditPage';

function App() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/index" component={IndexPage}/>
                <Route path="/criarAnuncio" component={AnimalCreatePage}/>
                <Route path="/editarAnimal" component={AnimalEditPage}/>
                <Route path="/criarAnuncio" component={AnimalCreatePage}/>
                <Route path="/chat" component={ChatPage}/>
                <Route path="/animal" component={AnimalPage}/>
                <Route path="/adocao" component={ConclusionFormPage}/>
            </Switch>
        </Router>
    );
}

export default App;