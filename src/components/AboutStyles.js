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
    profilePicture: {
        height: '300px',
        width: '300px',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: '0 0',
        margin: '20px auto',
        display: 'block',
        boxShadow: `5px 2px ${ThemeColors.blue}`,
    },
    card: {
        maxWidth: '90%',
        margin: '36px auto'
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