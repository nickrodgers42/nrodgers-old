import ThemeColors from '../colors'

const styles = {
  helloText: {
    padding: 5,
    color: ThemeColors.blue,
    fontFamily: 'monospace',
  },
  centerGrid: {
    position: 'absolute', 
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
  },
  textGridItem: {
    width: '300px',
    height: '80px',
    boxShadow: `5px 5px ${ThemeColors.blueSecondary}`,
    backgroundColor: ThemeColors.black,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
  subtitleWidth: {
    width: '300px',
  },
  introSubtitle: {
    padding: 5, 
    color: ThemeColors.white,
    fontFamily: 'Montserrat'
  },
  learnMoreButton: {
    color: 'black',
    backgroundColor: '#45A29E',
    margin: '50px 0 0'
  },
  buttonGrid: {
    position: 'absolute', 
    top: '90%',
    left: '50%',
    transform: "translate(-50%, -50%)",  
  },
  highlight: {
    color: ThemeColors.blue,
  },
  icon: {
    color: ThemeColors.blueSecondary,
    fontSize: 36
  },
  '@media screen and (min-width:768px)': {
    textGridItem: {
      width: '500px', 
      height: '100px', 
      marginBottom: 50,
    },
    subtitleWidth: {
      width: '500px',
    },
  },
}

export default styles
