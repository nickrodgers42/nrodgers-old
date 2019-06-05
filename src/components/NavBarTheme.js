import themeColors from '../colors';

const styles = {
  title: {
    fontFamily: 'Montserrat',
    color: themeColors.blue,
    padding: 20,
    cursor:'pointer' 
  },
  navBar: {
    backgroundColor: themeColors.black,
  },
  tab: {
    fontSize: 16,
    fontFamily: 'Montserrat'
  },
  tabs: {
    flexGrow: 1,
  },
  tabIndicator: {
    backgroundColor: themeColors.blue
  },
  icon: {
    color: themeColors.blueSecondary,
    fontSize: 36
  }
}

export default styles
