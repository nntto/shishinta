import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import NaviBar from 'components/NaviBar';
import { Pages } from 'data/Pages';
import 'App.css';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import theme from 'assets/styles/theme';

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <body>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <NaviBar />
      <Container>
        <Switch>
          {Pages.map((item) => (
            <Route exact path={item.route}>
              {item.component}
            </Route>
          ))}
          <Redirect push to="/" />
        </Switch>
      </Container>
    </body>
  </MuiThemeProvider>
);

export default App;
