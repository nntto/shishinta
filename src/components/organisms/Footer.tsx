import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { sizes } from 'assets/styles/MyTheme';
import { FooterItem } from 'data/FotterItems';

const useStyles = makeStyles({
  nav: { textAlign: 'center' },
  navUl: {
    listStyle: 'none',
    position: 'relative',
  },
  navUlLi: {
    display: 'inline',
    padding: `0 ${sizes[6]}`,
  },
});
export default ({ footerItems }: { footerItems: FooterItem[] }) => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <ul className={classes.navUl}>
        {footerItems.map((item) => (
          <li className={classes.navUlLi}>{item.icon}</li>
        ))}
      </ul>
    </nav>
  );
};
