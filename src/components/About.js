import React from 'react'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import styles from './AboutStyles'
import {
  Card,
  Typography,
  CardContent,
} from '@material-ui/core'
import profilePicture from '../assets/headshot.jpg'

const About = (props) => {
  const {classes} = props

  return (
    <div>
      <Navbar tab="about" />
      <Typography
        component="h3"
        variant="h3"
        className={classes.title}
      >
        About Me
      </Typography>
      <img 
        src={profilePicture} 
        alt='Profile' 
        className={classes.profilePicture}
      />
      <Card
        className={classes.card}
      >
        <CardContent>
          <Typography>
            Hello, my name is Nick Rodgers. I am a Software Engineer 
            with experience in full stack web development. 
          </Typography>
          <Typography>
            I am a senior at Utah State University, graduating in May of 2020,
            majoring in Computer Science with minors in Math and Spanish.
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(About)