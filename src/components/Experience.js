import React, { useState } from 'react'
import Navbar from './Navbar'
import PluralsightLogo from '../assets/pluralsightLogo.png'
import SdlLogo from '../assets/sdlLogo.png'
import {
  Card,
  CardHeader,
  CardContent, 
  Typography,
  CardActions,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { withStyles } from '@material-ui/styles'
import styles  from './ExperienceStyles'

const experienceDetails = {
  pluralsight: {
    company: 'Pluralsight, Inc',
    startDate: 'May 2019',
    endDate: 'August 2019',
    jobTitle: 'Software Development Intern',
    description: `During my internship at Pluralsight, I worked on the Video Services team
    where I implemented analytics on Pluralsight's video player and helped launch their new
    Course Player into production.`,
    relevantTech: [
      'React',
      'Node.js',
      'AWS',
      'Docker',
      'C#',
    ],
    logo: PluralsightLogo,
  },
  sdl: {
    company: 'Space Dynamics Laboratory',
    startDate: 'January 2017',
    endDate: 'May 2019',
    jobTitle: 'Web Developer\'s Assistant',
    description: `I worked as a Web Developer's Assistant on the Space Dynamics Laboratory's
    Enterprise Application Support Team, helping develop software to inventory, audit, and track parts
    around the Laboratory.`,
    relevantTech: [
      'Vue.js',
      'SQL',
      'TCL',
      'OpenACS'
    ],
    logo: SdlLogo
  }
}

const Experience = (props) => {
  const [expanded, setExpanded] = useState({})
  const { classes } = props
  const toggleExpanded = (key) => {
    let newExpanded = {...expanded}
    if (!(key in expanded)) {
      newExpanded[key] = true
    }
    else {
      newExpanded[key] = !newExpanded[key]
    }
    setExpanded({...newExpanded})
    console.log(expanded)
  }

  return (
    <div>
      <Navbar tab="experience" />
      <Typography
        component="h3"
        variant="h3"
        className={classes.title}
      >
        Experience
      </Typography>
      {Object.keys(experienceDetails).map(key => {
        const job = experienceDetails[key]
        return <Card
          key={job.jobTitle}
          className={classes.card}
        >
          <CardHeader
            title={job.jobTitle}
            subheader={
              <div>
                <Typography>{job.company}</Typography>
                <Typography>{job.startDate} - {job.endDate}</Typography>
              </div>
            }
          />
          <CardContent>
            <img 
              className={classes.cardImage} 
              src={job.logo} 
              alt={`${job.jobTitle} logo`}
            />
            <Typography>
              {job.description}
            </Typography>
          </CardContent>
          <CardActions>
            <div style={{flexGrow: 1}}>

            </div>
            <IconButton onClick={() => toggleExpanded(key)}>
              {expanded[key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>
          <Collapse in={expanded[key]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>Relevant Technologies Included:</Typography>
              <List>
                {job.relevantTech.map(tech => 
                  <ListItem key={tech}>
                    <ListItemText primary={tech} />
                  </ListItem>
                  )}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      }
      )}
    </div>
  )
}

export default withStyles(styles)(Experience)