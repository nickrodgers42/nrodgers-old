import React, { useState } from 'react'
import {
  AppBar,
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
  const { classes, tab } = props
  const [tabValue, setTabValue] = useState(tab)

  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <Typography
          variant="h5"
          component="h1"
          className={classes.title}
        >
          Nick&nbsp;Rodgers
        </Typography>
        <Tabs
          className={classes.tabs}
          value={tabValue}
          onChange={(event, newValue) => this.handleChange(event, newValue)}
          TabIndicatorProps={{ className: classes.tabIndicator }}
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
            />
          )
          }
        </Tabs>
        {logos.map(logo =>
          <Tooltip title={logo.name} key={logo.name}>
            <IconButton className={classes.icon} href={logo.link}>
              <logo.icon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar >
  )
}

export default withStyles(styles)(Navbar)
