import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemSecondaryAction,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  ListItemText,
  ListItemIcon
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './NavbarStyles'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail, 
  IoMdMenu,
  IoMdClose,
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
  const { classes, history } = props
  let {tab} = props
  if (tab === 'home') {
    tab = '/'
  }
  const [tabValue] = useState(tab)
  const [drawerOpen, setDrawerOpen] = useState(false)
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
  const mobile = useMediaQuery('(max-width:768px')

  return (
    <Box my={10}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          {mobile && 
            <IconButton onClick={() => setDrawerOpen(true)} className={classes.icon}>
              <IoMdMenu />
            </IconButton>
          }
          <Typography
            variant="h5"
            component="h1"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            Nick&nbsp;Rodgers
          </Typography>
          {mobile ?
            <Drawer anchor="top" open={drawerOpen} onClose={() =>setDrawerOpen(false)}>
              <List>
                <ListItem
                  style={{marginTop: '10px'}}
                >
                  <ListItemSecondaryAction>
                    <IconButton 
                      onClick={() => setDrawerOpen(false)} 
                      style={{fontSize: '36px'}}>
                      <IoMdClose />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                {tabs.map(tab => 
                  <ListItem button key={tab} onClick={() => history.push(tab)}>
                    <ListItemText primary={tab.toUpperCase()} />
                  </ListItem>
                )}
                <Divider />
                {logos.map(logo => 
                  <ListItem button key={logo.name} component="a" href={logo.link}>
                    <ListItemIcon style={{fontSize: '24px'}}>
                      <logo.icon />
                    </ListItemIcon>
                    <ListItemText primary={logo.name.toUpperCase()} />
                  </ListItem>
                )}
              </List>
            </Drawer>
          : 
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
          }
            {!mobile && logos.map(logo =>
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
