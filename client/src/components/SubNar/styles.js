import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
        
        marginTop: theme.spacing(9),
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: '50px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSubNar :{
        width: '150px',
        height: '40px',
        '&:hover': {
            textDecoration: 'none',
            background: '#22a6b3'
        },
        background: '#dff9fb',
        border : '1px solid #22a6b3',
        borderRadius: '0%'

    },
    btnSubNars :{
        width: '150px',
        height: '40px',
        '&:hover': {
            textDecoration: 'none',
            background: '#22a6b3'
        },
        background: '#dff9fb',
        border : '1px solid #22a6b3',
        borderRadius: '30% 0% 0% 30%'

    },
    btnSubNare :{
        width: '150px',
        height: '40px',
        '&:hover': {
            textDecoration: 'none',
            background: '#22a6b3'
        },
        background: '#dff9fb',
        border : '1px solid #22a6b3',
        borderRadius: '0% 30% 30% 0%'

    },

}));
