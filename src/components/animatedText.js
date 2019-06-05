import React, { Component } from 'react';
import {
  Typography
} from '@material-ui/core';

class AnimatedText extends Component {
  constructor(props) {
    super(props);
    this.textToWrite = props.textToWrite;
    this.state = {
      text: '',
      showCursor: true,
      blinkCount: 0
    }
  }

  componentDidMount() {
    this.writeText()
  }

  writeText() {
    this.setState({
      blinkCount: 6
    }, () => {
      this.textInterval = setInterval(() => {
        if (this.state.blinkCount >= 0) {
          this.setState((prevState, props) => {
            return {
              blinkCount: prevState.blinkCount - 1,
              showCursor: !prevState.showCursor
            }
          })
        }
        else if (this.state.text !== this.textToWrite) {
          this.setState((prevState, props) => {
            if (prevState.text.length + 1 === this.textToWrite.length) {
              return {
                blinkCount: 6,
                showCursor: true,
                text: prevState.text + this.textToWrite.substr(prevState.text.length, 1),
              }
            }
            else {
              return {
                showCursor: true,
                text: prevState.text + this.textToWrite.substr(prevState.text.length, 1)
              }
            }
          })
        }
        else {
          this.setState({
            showCursor: false
          }, clearInterval(this.textInterval))
        }
      }, 265)
    })
  }

  render() {
    return (
      <Typography style={this.props.style} variant={this.props.variant} component={this.props.component}>> {this.state.text}{this.state.showCursor ? '_' : null}</Typography>
    )
  }
}

export default AnimatedText
