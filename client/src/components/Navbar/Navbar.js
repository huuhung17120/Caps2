import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Select, MenuItem, ListItemIcon } from '@material-ui/core';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import SearchBar from "material-ui-search-bar";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history('/auth');

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
    <AppBar className={classes.appBar} color="inherit"  >
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
      <Button className='btnNav'>Giới Thiệu</Button>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">Chào, {user?.result.name}</Typography>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Select className={classes.ddlSelect} disableUnderline >
               <Button className={classes.btnProfile} component={Link} to="/profile">Tài Khoản Của Tôi</Button> <br/>
              <Button className={classes.btnSaveNews} component={Link} to="/savenews">Tin Đã Lưu </Button> <br/>
              <Button className={classes.btnHistory} component={Link} to="/history">Tin Đã Xem</Button> <br/>
              <Button className={classes.logout} color="secondary" onClick={logout}>Đăng Xuất</Button> 
            </Select>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.btnLogin}>Đăng Nhập</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
