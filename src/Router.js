import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Home from './components/pages/Home';
import Blog from './components/pages/Blog';

export default function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </ConnectedRouter>
  );
}
