import React from 'react';
import './app.css';
import Rotas from './rotas/Rotas';
import { Provider } from 'react-redux'
import store from './store/reducers'


function App() {
    
    return(
        <Provider store={ store }>
            <Rotas />
        </Provider>
    );
}

export default App;