import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';

import NaviBar from 'components/NaviBar';
import { Pages } from 'data/Pages';
import SkillCards from 'components/organisms/SkillCards';
import { Skills } from 'data/Skills';

const App: React.FC = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <NaviBar />
    <SkillCards skills={skills} />
    <Switch>
      {Pages.map((item) => (
        <Route exact path={item.route}>
          {item.component}
        </Route>
      ))}
      <Redirect push to="/" />
    </Switch>
  </>
);

export default App;
