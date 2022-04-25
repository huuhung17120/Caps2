import { Container, Grow, Grid, Avatar, Paper, Typography, Button, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';



import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

export default function Savenews() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

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
    <Container className={classes.container} >
      <Paper className={classes.leftPaper}>
        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
        <Typography className={classes.userName} variant="h5">{user?.result.name}</Typography>
        <Container className={classes.option1}>
          <Button className={classes.btnSaveNews} component={Link} to="/savenews">Tin Đã Lưu </Button> <br />
          <Button className={classes.btnHistory} component={Link} to="/history">Tin Đã Xem</Button>
        </Container>
        <Container className={classes.option2}>
          <Button className={classes.btnProfile} component={Link} to="/profile">Tài Khoản Của Tôi</Button> <br />
        </Container>
        <Container className={classes.option3}>
          <Button className={classes.logout} color="secondary" onClick={logout}>Thoát</Button>
        </Container>
      </Paper>
      <Paper className={classes.rightPaper}>
      <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography component={Link} to="/newsdetail" className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
      </Paper>
    </Container>
  )
}

