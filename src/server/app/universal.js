const path = require('path');
const fs = require('fs');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import createRoutes from '../../client/app/routes';
import configureStore from '../../client/app/store';
import {Provider} from 'react-redux';

const routes = createRoutes({});

module.exports = function universalLoader(req, res) {
  //res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end();
    }
    match({ routes, location: req.url }, (err, redirect, renderProps) => {
      if(err) {
        console.error('match err', err)
        return res.status(404).end();
      } else if(redirect) {
        res.redirect(302, redirect.pathname + redirect.search)
      } else if(renderProps) {
        let store = configureStore()
        const ReactApp = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const RenderedApp = htmlData.replace('{{Loading...}}', ReactApp);
        res.send(RenderedApp);
      } else {
        return res.status(404).end();
      }
    })
  })
}

