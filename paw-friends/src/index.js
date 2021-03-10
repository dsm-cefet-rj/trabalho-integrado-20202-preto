import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './App.js'

//Renderiza o componente IndexPage.js em uma div no index.html
//Esse componente se refere ao conjunto de componentes que constituem a página

ReactDOM.render(
  <App />,
  document.getElementById('IndexPageComponent')
);