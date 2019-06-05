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

  render() {
    const {classes} = this.props;
    return (
      <div>
      <Grid container 
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.fullScreenGrid}
      >
        <Grid item>
          <div>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.introDiv}>
            <AnimatedText style={styles.helloText} textToWrite={"Hello, World!"} variant='h2' component='h2'></AnimatedText>
            <Typography className={classes.introSubtitle} variant="h4">I am Nick</Typography>
            <Typography className={classes.introSubtitle} variant="subtitle1">Software Developer</Typography>
          </div>
          <Grid container>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>
            <Grid item>
              <Button size="large" className={classes.continueButton} variant="outlined"><Typography>Continue</Typography></Button>
            </Grid>
      </Grid>
      <Grid 
        direction="column"
        className={classes.fullScreenGrid}
      ></Grid>
      </div>
    )
  }
}

export default withStyles(styles)(HomeContent);
