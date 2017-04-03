import React from 'react';
import ReactDOM from 'react-dom';
import { FirstPage } from '../../src/client/app/containers/FirstPage.js';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FirstPage />, div)
})

