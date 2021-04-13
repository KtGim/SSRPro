import React from 'react';
import ReactDom from 'react-dom';

import App from '../shared/App';
import { BrowserRouter as Router} from 'react-router-dom';

import {
  Provider
} from 'react-redux';

import {
  clientStore
} from '../shared/store'

ReactDom.hydrate(<Provider store={clientStore()}>
  <Router><App /></Router>
</Provider>, document.getElementById('root'), () => {
  console.log('is render')
})
