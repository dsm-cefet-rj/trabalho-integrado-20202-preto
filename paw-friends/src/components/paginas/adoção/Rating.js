//Componente de Rating de Estrelas do Formulario

import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';

export default class Rating extends Component {
  state = { value: 0 };
  render() {
    return (
      <BeautyStars
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}