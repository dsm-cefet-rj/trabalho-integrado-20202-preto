import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

import IndexPage from './components/IndexPage';
import AnimalPage from './components/AnimalPage';
import AnimalCreatePage from './components/AnimalCreatePage';
import ChatPage from './components/ChatPage';
import ConclusionFormPage from './components/ConclusionFormPage';
import AnimalEditPage from './components/AnimalEditPage';

function App() {
    return(
        <Router>
            <Route path="/index" component={IndexPage}/>
            <Route path="/criarAnuncio" component={AnimalCreatePage}/>
            <Route path="/editarAnimal" component={AnimalEditPage}/>
            <Route path="/criarAnuncio" component={AnimalCreatePage}/>
            <Route path="/chat" component={ChatPage}/>
            <Route path="/animal" component={AnimalPage}/>
        </Router>
    );
}

export default App;