import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import Layout from 'containers/layout';
import App from 'containers/app';
import AboutPage from './components/about/AboutPage';


const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="about" component={AboutPage} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default routes;
