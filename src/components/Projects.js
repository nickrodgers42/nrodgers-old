import React, { useState } from 'react'
import Navbar from './Navbar'
import { 
  Typography,
  Card,
  CardHeader,
  CardActions,
  IconButton, 
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import {
  IoLogoGithub,
} from 'react-icons/io';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { withStyles } from '@material-ui/styles'
import styles from './ProjectStyles'

const projects = {
  nrodgers: {
    title: 'nrodgers.com',
    description: `My personal portfolio website made in react and hosted on AWS
    with CI/CD from the master branch of my github repository`,
    relevantTech: ['React', 'AWS Amplify', 'Material UI'],
    githubLink: 'https://github.com/nickrodgers42/nrodgers'
  },
  katpoots: {
    title: 'Katpoots',
    description: `A live quiz taking application created for my Software Engineering class,
    made with the help of three other classmates`,
    relevantTech: ['React', 'MongoDB', 'Redux', 'Material UI', 'Socket.io'],
    githubLink: 'https://github.com/nickrodgers42/katpoots'
  },
  rodgersFamily: {
    title: 'Rodgers Family Favorites',
    description: `A website for my family to add and look up recipes from our great grandma's recipe book`,
    relevantTech: ['React', 'Express.js', 'PostgreSQL'],
    githubLink: 'https://github.com/nickrodgers42/recipes'
  },
  anxietyGame: {
    title: 'Anxiety the Game',
    description: `A two-dimensional game developed in Game Maker Studio 2 for HackUState 2018. Made with a team of three people,
    this game placed first in the game category and first place overall`,
    relevantTech: ['Game Maker Studio 2'],
    githubLink: 'https://github.com/extinctconcept/HackathonGame'
  }
}

const Projects = (props) => {
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
  }

  return (
    <div>
      <Navbar tab="projects" />
      <Typography
        component="h3"
        variant="h3"
        className={classes.title}
      >
        Projects
      </Typography>
      {Object.keys(projects).map(key => {
        const project = projects[key]
        return <Card
          className={classes.card}
        >
          <CardHeader
            title={project.title}
          />
          <CardContent>
            <Typography>
              {project.description}
            </Typography>
            <CardActions>
              <IconButton href={project.githubLink}>
                <IoLogoGithub />
              </IconButton>
              <div className={classes.growDiv}></div>
              <IconButton onClick={() => toggleExpanded(key)}>
                {expanded[key] ? <ExpandLessIcon/> : <ExpandMoreIcon /> }
              </IconButton>
            </CardActions>
          </CardContent>
          <Collapse in={expanded[key]} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography>Technologies used:</Typography>
              <List>
                {project.relevantTech.map(tech =>
                  <ListItem key={tech}>
                    <ListItemText primary={tech} />
                  </ListItem>
                )}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      })}
    </div>
  )
}

export default withStyles(styles)(Projects)