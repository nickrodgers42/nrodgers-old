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
        padding: '20px',
        minWidth: '90%',
        minHeight: '100px'
    },
    contactBody:{
        padding: '20px 0'
    },
    contactLink: {
        color: ThemeColors.blueSecondary,
        textDecoration: 'none',
        '&:hover': {
            color: ThemeColors.blue,
        }
    },
    '@media screen and (min-width: 768px)': {
        contactCard: {
            minWidth: '600px'
        }
    }
}

export default styles