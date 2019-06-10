import React, {Component} from 'react';
import NavBar from './NavBar';
import {
  Button,
  Card,
  Grid,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './HomeStyles'
import AnimatedText from './animatedText'
import moher from '../moher.jpg'
import tree from '../tree.png'
import circuit from '../circuit.png'
import network from '../network2.png'

class HomePage extends Component {

  scrollToDiv(name) {
    if (this.refs[name]) {
      this.refs[name].scrollIntoView()
      window.scrollBy(0, -100)
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar navigate={(name) => this.scrollToDiv(name)}/>
        <Grid container 
          ref="home"
          direction="column"
          justify="space-evenly"
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
              <Button onClick={() => this.scrollToDiv('about')} size="large" className={classes.continueButton} variant="outlined"><Typography>Continue</Typography></Button>
            </Grid>
      </Grid>
      <Grid 
        container
        ref="about"
        direction="column"
        justify='space-evenly'
        alignItems="center"
        className={classes.fullScreenGrid}
        style={{ background: `url(${tree}) right center no-repeat fixed`, backgroundSize: 'contain' }}
      >
        <Typography className={classes.heading} variant='h2'>About Me</Typography>
        <Card className={classes.aboutCard} style={{overflow: 'visible'}}>
          <Grid container
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography
                variant='h3' 
                className={classes.aboutCardTitle}
              >  
                Full-Stack<br/>Web Developer
              </Typography>
              <Typography
                className={classes.aboutText}
                variant='body1'
                align="justify"
              >
               I am a fourth year student at Utah State University with experience in full stack
                web development. 
                <br/>
                I have experience working with React, React Native, Vue.js, Node.js, 
                PostgreSQL, and more. I am also ready learn anything else so I can
                get work done.
                <br />
                I am working on my Bachelor's Degree in Computer Science with minors in Math 
                and Spanish.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img alt="moher" className={classes.aboutImg} src={moher}/>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid
        ref="projects"
        container
        direction="column"
        className={classes.fullScreenGrid}
        style={{background: `url(${circuit}) left top no-repeat fixed`, backgroundSize: 'contain'}}
      >
        <Typography className={classes.heading} variant='h2'>Projects</Typography>
      </Grid>
      <Grid
        ref="experience"
        container
        direction="column"
        className={classes.fullScreenGrid}
        style={{background: `url(${network}) center top no-repeat fixed`, backgroundSize: 'cover'}}
      >
        <Typography className={classes.heading} variant='h2'>Experience</Typography>
      </Grid>
      <Grid
        ref="contact"
        container
        direction="column"
        className={classes.fullScreenGrid}
      >
        <Typography className={classes.heading} variant='h2'>Contact</Typography>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(HomePage);
