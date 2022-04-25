import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '70px',
   justifyContent: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width:'30%',
    float: 'right',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
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
  btnNav: {
    marginLeft: '30px',
  },
  
  userName: {
    marginLeft: '3px',
    marginRight: '15px'
  },
  ddlSelect: {
    marginLeft: '-20px',
    
  },
  btnProfile: {
    width: '100%',
    borderBottom: '1px solid #B9C2CD',
    height: '48px',
    borderRadius: '0%',
  },
  btnSaveNews:{
    width: '100%',
    height: '48px',
    borderBottom: '1px solid #B9C2CD',
    borderRadius: '0%',

  },
  btnHistory:{
    width: '100%',
    height: '48px',
    borderBottom: '1px solid #B9C2CD',
    borderRadius: '0%',
  },
  logout:{
    width: '100%',
  },
  btnHome: {
    "&.selected":{
      background:'black',
    },
  }
}));
