import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import IndexPage from './components/IndexPage';
import AnimalPage from './components/AnimalPage';
import AnimalCreatePage from './components/AnimalCreatePage';
import Chat from './components/Chat';
import Formulario from './components/Formulario';

//Renderiza o componente IndexPage.js em uma div no index.html
//Esse componente se refere ao conjunto de componentes que constituem a página
ReactDOM.render(
  <Formulario />,
  document.getElementById('IndexPageComponent')
);