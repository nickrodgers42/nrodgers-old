import ThemeColors from '../colors'

const styles = {
    centerGrid: {
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
    },
    heading: {
        fontFamily: 'Montserrat',
        padding: '10px 0'
    },
    contactCard: {
        padding: '20px'
    },
    contactBody:{
        
    },
    contactLink: {
        color: ThemeColors.blueSecondary,
        textDecoration: 'none',
        '&:hover': {
            color: ThemeColors.blue,
        }
    }
}

export default styles