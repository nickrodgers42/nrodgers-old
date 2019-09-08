import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './NavbarStyles'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail
} from 'react-icons/io';
import themeColors from '../colors';
import { withRouter } from 'react-router-dom'

const tabs = [
  'about',
  'projects',
  'experience',
  'contact'
]

const logos = [
  {
    name: 'GitHub',
    icon: IoLogoGithub,
    link: 'https://github.com/nickrodgers42/'
  },
  {
    name: 'LinkedIn',
    icon: IoLogoLinkedin,
    link: 'https://www.linkedin.com/in/nicholas-rodgers42/'
  },
  {
    name: 'Email',
    icon: IoMdMail,
    link: 'mailto:nick.rogers42@gmail.com'
  }
]

const Navbar = (props) => {
  const { classes, tab, history } = props
  const [tabValue] = useState(tab)
  const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: themeColors.blueSecondary,
      },
    },
  })(props => <Tabs {...props} TabIndicatorProps={{ children: <div />}} />);

  return (
    <Box my={10}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            Nick&nbsp;Rodgers
          </Typography>
          <StyledTabs
            className={classes.tabs}
            value={tabValue}
            TabIndicatorProps={{ children: <div /> }}
          >
            <Tab
              label='home'
              value='/'
              style={{ display: 'none' }}
            />
            {tabs.map(tab =>
              <Tab
                label={tab}
                className={classes.tab}
                value={tab}
                key={tab}
                onClick={() => history.push(tab)}
              />
            )
            }
          </StyledTabs>
          {logos.map(logo =>
            <Tooltip title={logo.name} key={logo.name}>
              <IconButton className={classes.icon} href={logo.link}>
                <logo.icon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar >
    </Box>
  )
}

export default withRouter(withStyles(styles)(Navbar))
