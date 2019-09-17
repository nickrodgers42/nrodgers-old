import React from 'react'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import styles from './ContactStyles'
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core'

const Contact = (props) => {
  const {classes} = props

  return (
    <div>
      <Navbar tab="contact" />
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.centerGrid}
      >
        <Card
          className={classes.contactCard}
        >
          <Typography            
            variant="h4"
            component="h3"
            className={classes.heading}
          >
            Let's Talk!
          </Typography>
            <Typography
              className={classes.contactBody}
            >
              Email me at <a className={classes.contactLink} href="mailto:nick.rodgers42@gmail.com">nick.rodgers42@gmail.com</a>
              <br/>
              Or message me on <a className={classes.contactLink} href="https://www.linkedin.com/in/nicholas-rodgers42/">LinkedIn</a>
            </Typography>
        </Card>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Contact)