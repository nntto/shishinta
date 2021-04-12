import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Page } from 'data/Pages';
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  MuiThemeProvider,
  Theme,
  Toolbar,
} from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const NaviBar = ({ pages }: { pages: Page[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider
        theme={createMuiTheme({
          shadows: Array(25).fill('none') as Shadows,
        })}
      >
        <AppBar
          position="static"
          color="transparent"
          style={{ boxShadow: 'none' }}
        >
          <Toolbar>
            {pages.map((item) => (
              <Link
                activeClass="active"
                to="section3"
                spy
                smooth
                offset={-70}
                duration={800}
                className={classes.title}
              >
                {item.label}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default NaviBar;
