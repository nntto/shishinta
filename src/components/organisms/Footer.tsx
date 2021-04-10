import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FooterItems from 'data/FotterItems';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});
export default function LabelBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      {FooterItems.map((item) => (
        <BottomNavigationAction
          label={item.label}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
}
