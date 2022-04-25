import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  maincontainer:{
    display: 'flex',
    marginTop: theme.spacing(18),
    borderTop: '1px solid #696969',
    paddingTop: '15px',
    width: '2000px',
  },

  leftNews: {
    borderRight: '1px solid #696969',
    width: '60%'
  },
  rightNews: {
    width: '50%',
    marginRight: '-40px'
  },

  hotNews: {
    display: 'inline-block',
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'none',
    textDecoration: 'none',
    color: 'black',
    "&:hover": {
      color: 'gray'
    }
  },
  bottomleftNews: {
    marginTop: '15px',
    borderTop: '1px solid #696969',
    borderBottom: '1px solid #696969',
    display: 'flex',
    width: '100%'
  },
  bottomNews: {
    display: 'inline-block',
    width: '33%'
  },
  bnewsTitle: {
    fontWeight: 'bold',
    textTransform: 'none',
    textDecoration: 'none',
    color: 'black',
    "&:hover": {
      color: 'gray'
    }
  },
  underbottomNews: {
    marginTop: '15px',
    textTransform: 'none',
    alignItems: 'flex-start'
  },
  ubnewsTitle: {
    marginLeft: '10px',
    textTransform: 'none',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    "&:hover": {
      color: 'gray'
    }
  },
  arightNews: {
    width: '100%',
    textTransform: 'none',
    alignItems: 'flex-start'
  }
}));
