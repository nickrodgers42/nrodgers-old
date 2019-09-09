import React from 'react'
import Navbar from './Navbar'
import AnimatedText from './animatedText'
import { withStyles } from '@material-ui/styles'
import styles from './HomeStyles'
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery
} from '@material-ui/core'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail
} from 'react-icons/io'

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

const Home = (props) => {
  const { classes } = props
  const mobile = useMediaQuery('(max-width:768px')

  return (
    <div>
      <Navbar tab="home" />
      
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.centerGrid}
      >
        <Grid item
         className={classes.textGridItem}
        >
          <AnimatedText style={styles.helloText} textToWrite={"Hello World!"} variant={mobile ? 'h5': 'h3'} component='h2'></AnimatedText>
        </Grid>
        <Grid item className={classes.subtitleWidth}>
          <Typography className={classes.introSubtitle} variant='h4'>I am <span className={classes.highlight}>Nick</span></Typography>
          <Typography className={classes.introSubtitle} variant='h5'>Software Engineer</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" href="/about" className={classes.learnMoreButton}>Learn More</Button>
        </Grid>>
      </Grid>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.buttonGrid}
      >
        <Grid item>
          {logos.map(logo =>
            <Tooltip title={logo.name} key={logo.name}>
              <IconButton className={classes.icon} href={logo.link}>
                <logo.icon />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
      </Grid>

    </div>
  )
}

export default withStyles(styles)(Home)
