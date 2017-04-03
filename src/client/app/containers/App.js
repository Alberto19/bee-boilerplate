import React, { Component, PropTypes } from 'react';
//eslint-disable-next-line
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Pagina de teste legal</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
