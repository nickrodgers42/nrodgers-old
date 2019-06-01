import React, {Component} from 'react';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import {
  Toolbar
} from '@material-ui/core'
import {  createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

const theme = createMuiTheme({});

class HomePage extends Component {
  render() {
    const {classes} = this.props;
    let Content = null;
    if (this.props.route === '/') {
      Content = HomeContent;
    }
    return (
      <div>
        <ThemeProvider theme={theme}>
          {/* <div className={classes.toolbar}> */}
            <NavBar route={this.props.route} />
          {/* </div> */}
          { Content != null ? <Content /> : null}
        </ThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(HomePage);
