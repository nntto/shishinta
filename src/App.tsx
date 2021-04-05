import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';

import Home from 'components/pages/Home';
import History from 'components/pages/History';

const App: React.FC = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/history" component={History} />
      <Redirect push to="/" />
    </Switch>
  </>
);

export default App;
