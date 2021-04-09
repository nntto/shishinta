import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Redirect } from 'react-router';
import { Pages } from 'data/Pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';

interface TabPanelProps {
  children: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    ariaControls: `simple-tabpanel-${index}`,
  };
}

const NaviBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {Pages.map((item) => {
            const { id, ariaControls } = a11yProps(item.id);
            return (
              <Tab label={item.label} id={id} aria-controls={ariaControls} />
            );
          })}
        </Tabs>
      </AppBar>
      {Pages.map((item) => (
        <TabPanel value={value} index={item.id}>
          <Redirect to={item.route} />
        </TabPanel>
      ))}
    </MuiThemeProvider>
  );
};

export default NaviBar;
