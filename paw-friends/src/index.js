import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import IndexPage from './components/IndexPage';
import AnimalPage from './components/AnimalPage';
import AnimalCreatePage from './components/AnimalCreatePage';
import ChatPage from './components/ChatPage';
import ConclusionFormPage from './components/ConclusionFormPage';
import AnimalEditPage from './components/AnimalEditPage';

//Renderiza o componente IndexPage.js em uma div no index.html
//Esse componente se refere ao conjunto de componentes que constituem a página

ReactDOM.render(
  <AnimalEditPage />,
  document.getElementById('IndexPageComponent')
);