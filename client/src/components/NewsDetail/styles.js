import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  mainContent: {
    display: 'flex',
    marginTop: theme.spacing(18),
    borderTop: '1px solid #696969',
    paddingTop: '15px',
    width: '100%',
  },
  leftContent: {
    width:'60%',

  },
  rightContent: {
    width:'40%',
  },
  newsTitle: {
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'none',
    textDecoration: 'none',
    color: 'black',
    
  },

  newsContent:{
    marginTop: '30px',
    paddingLeft: '30px'
  },

  comment: {
    marginLeft: '-15px',
    marginTop: '30px',
    width:'500px',
  },
  belowInput: {
    marginLeft: '-40px',
    width: '600px',
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    height: '15%'
  },
  note: {
    fontSize: '11px',
    fontStyle: 'italic'
  },
  btnComment: {
    float: 'right',
    marginTop: '30px',
    background  : '#05c46b',
    color: 'white',
    "&:hover": {
      background  : '#0be881',
      color: '#485460',
    }
  }
}));
