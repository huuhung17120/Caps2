import React from 'react'
import useStyles from './styles';
import { Container, Link, Button, AppBar } from '@material-ui/core';


export default function Subnar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.container} color="inherit">
      <Button component={Link} to="/" variant="text" className={classes.btnSubNars}>Video</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNar}>Sự Kiện</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNar}>Xã Hội</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNar}>Thế Giới</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNar}>Bất Động Sản</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNar}>Việc Làm</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNar}>Giải Trí</Button>
      <Button component={Link} to="/" variant="text" className={classes.btnSubNare}>Văn Hóa</Button>
    </AppBar>
  )
}
