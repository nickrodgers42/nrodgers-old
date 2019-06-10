import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tab,
  Tabs,
  Tooltip,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './NavBarTheme';
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

class navBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: this.props.route
    }
  }

  componentDidMount() {
    const height = document.getElementById('appBar').clientHeight;
    this.setState({ height: height });
  }

  handleChange(event, newValue) {
    console.log('change')
    this.setState({
      tabValue: newValue
    },this.props.navigate(newValue))
  }

  render() {
    const {classes} = this.props;
    return (
      <AppBar id="appBar" position="fixed" className={classes.navBar}>
        <Toolbar>
            <Typography 
              variant="h4"
              component="h1"
              className={classes.title}
              onClick={() => this.props.navigate('home')}
            >
              Nick&nbsp;Rodgers
            </Typography>
          <Tabs
            className={ classes.tabs }
            value={this.state.tabValue}
            onChange={(event, newValue) => this.handleChange(event, newValue)}
            TabIndicatorProps={{className: classes.tabIndicator}}
          > 
            <Tab 
              label='home'
              value='/'
              style={{display: 'none'}}
            />
            {tabs.map(tab =>
                <Tab
                  label={tab}
                  className={classes.tab}
                  style={{ height: this.state.height }}
                  value={tab}
                  key={tab}
                />
              )
            }
          </Tabs>
          {logos.map(logo =>
            <Tooltip title={logo.name} key={logo.name}>
              <IconButton className={classes.icon} href={logo.link}>
                <logo.icon/>
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(navBar);
