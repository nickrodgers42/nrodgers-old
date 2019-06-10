import ThemeColors from '../colors'

const styles = {
  helloText: {
    padding: 5,
    color: ThemeColors.blue,
    fontFamily: 'monospace' 
  },
  heading: {
    color: ThemeColors.blue,
    fontFamily: 'Montserrat'
  },
  fullScreenGrid: { 
    minHeight: '100vh',
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
  },
  aboutImg: {
    width: '400px',
    borderRadius: '10px',
  },
  aboutCard: {
    padding: '20px',
    maxWidth: '800px'
  },
  aboutCardTitle: {
    marginBottom: '20px'
  },
  aboutText: {
    paddingRight: "20px"
  }
}

export default styles
