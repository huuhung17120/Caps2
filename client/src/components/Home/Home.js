import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Typography } from '@material-ui/core';
import {Link}  from 'react-router-dom'
import Subnar from '../SubNar/Subnar';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Subnar />
      <Container className={classes.maincontainer}>
        <Container className={classes.leftNews}>
          <Button className={classes.hotNews} component={Link} to="/newsdetail">
            <Box
              className={classes.img}
              component="img"
              sx={{
                height: 600,
                width: 900,
                maxHeight: { xs: 600, md: 400 },
                maxWidth: { xs: 900, md: 650 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
           <Typography component={Link} to="/newsdetail" className={classes.newsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
          <Container className={classes.bottomleftNews}>
            <Button className={classes.bottomNews} component={Link} to="/newsdetail">
              <Box
                className={classes.bimg}
                component="img"
                sx={{
                  height: 100,
                  width: 200,
                  maxHeight: { xs: 100, md: 100 },
                  maxWidth: { xs: 200, md: 200 },
                }}
                alt=""
                src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
              />
              <Typography component={Link} to="/newsdetail" className={classes.bnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải</Typography>
            </Button>
            <Button className={classes.bottomNews} component={Link} to="/newsdetail">
              <Box
                className={classes.bimg}
                component="img"
                sx={{
                  height: 100,
                  width: 200,
                  maxHeight: { xs: 100, md: 400 },
                  maxWidth: { xs: 200, md: 650 },
                }}
                alt=""
                src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
              />
              <Typography component={Link} to="/newsdetail" className={classes.bnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
            </Button>
            <Button className={classes.bottomNews} component={Link} to="/newsdetail">
              <Box
                className={classes.bimg}
                component="img"
                sx={{
                  height: 100,
                  width: 200,
                  maxHeight: { xs: 100, md: 400 },
                  maxWidth: { xs: 200, md: 650 },
                }}
                alt=""
                src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
              />
              <Typography component={Link} to="/newsdetail" className={classes.bnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
            </Button>
          </Container>
          <Button className={classes.underbottomNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 150, md: 150 },
                maxWidth: { xs: 300, md: 300 },
              }}
              alt=""
              src="https://cdnimg.vietnamplus.vn/t1200/uploaded/zgnokt/2022_03_16/vnp_hanoifcvsthanhhoax.jpg"
            />
            <Typography  component={Link} to="/newsdetail"  className={classes.ubnewsTitle}>CLB Hà Nội xác nhận chia tay Quang Hải </Typography>
          </Button>
        </Container>
        <Container className={classes.rightNews}>
        <Button className={classes.arightNews} component={Link} to="/newsdetail">
            <Box
              className={classes.ubimg}
              component="img"
              sx={{
                height: 150,
                width: 300,
                maxHeight: { xs: 150, md: 150 },
                maxWidth: { xs: 300, md: 300 },
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
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
