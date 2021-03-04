import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import IndexPage from './components/IndexPage';
import AnimalPage from './components/AnimalPage';
import AnimalCreate from './components/AnimalCreate';

//Renderiza o componente IndexPage.js em uma div no index.html
//Esse componente se refere ao conjunto de componentes que constituem a página

ReactDOM.render(
  <AnimalCreate/>,
  document.getElementById('IndexPageComponent')
);


/* ReactDOM.render(
  <AnimalPage />,
  document.getElementById('AnimalPageComponent')
); */