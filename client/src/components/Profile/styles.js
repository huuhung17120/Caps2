import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: theme.spacing(10),
    },

    leftPaper: {
        
        border: '1px solid #B9C2CD',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        width: '25%',
        marginLeft:'-20px',
        borderRadius: '2%',
        
    },
    rightPaper: {
        border: '1px solid #B9C2CD',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        width: '70%',
        borderRadius: '2%',
    },

    purple: {
        width: '200px',
        height: '200px'
    },

    userName: {
        marginTop: '10px',
        fontWeight: 'Bold'
    },
    option1: {
        marginTop: '20px',
        borderTop: '1px solid',
        padding: '20px 0px 20px 10px',
        borderBottom: '1px solid',
    },
    option2: {
        marginTop: '20px',
        padding: '0px 0px 20px 10px',
        borderBottom: '1px solid',
    },
    option3: {
        marginTop: '20px',
        padding: '0px 0px 20px 10px',
    },

}));
