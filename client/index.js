import React from 'react';
import { render } from 'react-dom';
import App from './router';
import Layout from './containers/layout'

render((
  <Layout>
    <App/>
  </Layout> ), document.getElementById('root'));
