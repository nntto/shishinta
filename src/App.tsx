import React from 'react';
import './App.css';
import NaviBar from 'components/organisms/NaviBar';
import { Pages } from 'data/Pages';
import 'App.css';
import { Container, MuiThemeProvider } from '@material-ui/core';
import theme from 'assets/styles/theme';
import Footer from 'components/organisms/Footer';

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <body>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <NaviBar pages={Pages} />
      <Container>
        {Pages.map((item) => (
          <div style={{ minHeight: '100vh' }} id={item.elementId}>
            <div style={{ height: '100%' }}>{item.component}</div>
          </div>
        ))}
      </Container>
      <Footer />
    </body>
  </MuiThemeProvider>
);

export default App;
