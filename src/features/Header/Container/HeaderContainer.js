import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  }
}));

const HeaderContainer = props => {
    const classes = useStyles();
    return(<AppBar
      color="primary"
      position="relative"
      className={classes.root}
    >
      <Toolbar>
        Covid-Connect
      </Toolbar>
    </AppBar>);
};

HeaderContainer.propTypes = {
    className: PropTypes.string,
};

export default HeaderContainer;