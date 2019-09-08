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
    width: '500px', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    boxShadow: '5px 5px #45A29E',
    flexGrow: 1, 
    height: '100px', 
    backgroundColor: 'black'
  },
  subtitleWidth: {
    width: '500px',
  },
  introSubtitle: {
    padding: 5, 
    color: ThemeColors.white,
    fontFamily: 'Montserrat'
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
  }
}

export default styles
