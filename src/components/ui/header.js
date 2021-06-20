//import React, { useState, useEffect } from 'react';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import {Link} from 'react-router-dom';
//import {useTheme} from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "50px"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
}));

export default function Header(props) {
  const classes = useStyles();
  //const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.down("md"));
  //const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const routes = [
    {name: "Home", link: "/", activeIndex: 0},
    {name: "About", link: "/about", activeIndex: 1},
    {name: "My Projects", link: "/projects", activeIndex: 2},
    {name: "Services", link: "/services", activeIndex: 3},
    {name: "Blog", link: "/blog", activeIndex: 4}
  ]

  // useEffect(() => {
  //   [...routes].forEach(route => {
  //     switch (window.location.pathname) {
  //       case `${route.link}`:
  //         if (props.value !== route.activeIndex) {
  //           props.setValue(route.activeIndex)
  //           if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
  //             props.setSelectedIndex(route.selectedIndex);
  //           }
  //         }
  //         break;
  //       default:
  //         break;

  //     }
  //   });
  // }, [props.value, props.selectedIndex, routes, props]);



  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
            <Tab
              key={`${route}${index}`}
              className={classes.tab}
              //component={Link}
              to={route.link}
              label={route.name}
            />
          )
        )}
      </Tabs>
    </React.Fragment>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {tabs}
        </Toolbar>
      </AppBar>
    </div>
  );
}