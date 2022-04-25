import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginLeft : '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '70px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  logo: {
    marginLeft: '10px',
    width: '50px',
    height: '50px',
  },
  searchBar: {
    width: '400px',
    height: '30px',
    marginLeft:'100px',
    border: '1px solid',
  },
  btnHomePage: {
    marginLeft: '40px',
  },
  btnDesc: {
    marginLeft: '30px',
  },
  btnHome: {
    "&.active":{
      background:'black',
    },
  }
}));
