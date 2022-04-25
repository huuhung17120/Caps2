import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import useStyles2 from './styles2';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const classes = useStyles2();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar}  color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">FastNews</Typography>
        <img src='https://api.iconify.design/bi:newspaper.svg?color=currentColor' className={classes.logo}></img>
      </div>
      <SearchBar className={classes.searchBar}
      //   value={this.state.value}
      //   // onChange={(newValue) => this.setState({ value: newValue })}
      //   // onRequestSearch={() => doSomethingWith(this.state.value)}
      />
      <Button component={Link} to="/" className={classes.btnHome}>Trang Chủ</Button>
      <Button className={classes.btnDesc}>Giới Thiệu</Button>
    </AppBar>
  );
};

export default Navbar;
