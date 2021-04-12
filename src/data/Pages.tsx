import React from 'react';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import History from 'components/pages/History';
import Works from 'components/pages/Works';
import Skills from 'components/pages/Skills';

export type Page = {
  id: number;
  route: string;
  label: string;
  component: React.ReactNode;
  elementId: string;
};

export const Pages: Page[] = [
  {
    id: 0,
    route: '/',
    label: 'HOME',
    component: <Home />,
  },
  {
    id: 1,
    route: '/about',
    label: 'ABOUT',
    component: <About />,
  },
  {
    id: 2,
    route: '/skills',
    label: 'SKILLS',
    component: <Skills />,
  },
  {
    id: 3,
    route: '/history',
    label: 'HISTORY',
    component: <History />,
  },
  {
    id: 4,
    route: '/works',
    label: 'WORKS',
    component: <Works />,
  },
].map((item) => ({
  ...item,
  elementId: `section${String(item.id)}`,
}));
