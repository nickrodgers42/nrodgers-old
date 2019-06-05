import ThemeColors from '../colors'

const styles = {
  helloText: {
    padding: 5,
    color: ThemeColors.blue,
    fontFamily: 'monospace' 
  },
  fullScreenGrid: { 
    flex: 1,
    height: '100vh'
  },
  introDiv: {
    display: 'inline-block',
    minWidth: '500px',
    backgroundColor: 'transparent'
  },
  introSubtitle: {
    padding: 5, 
    color: ThemeColors.white
  },
  continueButton: {
    color: '#45A29E',
    borderColor: '#45A29E'
  }
}

export default styles
