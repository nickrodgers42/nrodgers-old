import React, { Component } from 'react';
import {
  Button,
  Grid,
  Typography,
} from '@material-ui/core'
import AnimatedText from './animatedText'
import { withStyles } from '@material-ui/styles';
import styles from './HomeStyles'

class HomeContent extends Component {

  componentDidMount() {

  }

  scrollDiv() {
    if (this.refs.grid2) {
      this.refs.grid2.scrollIntoView({behavior: 'smooth'});
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
      </div>
    )
  }
}

export default withStyles(styles)(HomeContent);
