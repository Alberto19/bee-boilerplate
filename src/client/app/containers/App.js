import React, { Component } from 'react';
import _ from 'lodash';

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>Pagina de teste legal</h1>
        {this.props.children}
      </div>
    )
  }
}
