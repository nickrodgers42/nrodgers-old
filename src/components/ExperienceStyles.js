import ThemeColors from '../colors'

const styles = {
    title: {
        color: ThemeColors.blue, 
        maxWidth: '500px', 
        width: '100%', 
        margin: 'auto', 
        paddingLeft: '20px',
        marginTop: '100px',
        fontFamily: 'Montserrat'
    },
    card: {
        maxWidth: '90%',
        margin: '36px auto'
    },
    cardImage: {
        width: '66%',
        display: 'block',
        margin: '0 auto 10px'
    },
    growDiv: {
        flexGrow: 1
    },
    '@media screen and (min-width:768px)': {
        title: {
            maxWidth: '600px',
        },
        card: {
            maxWidth: '600px',
        }
    }
}

export default styles