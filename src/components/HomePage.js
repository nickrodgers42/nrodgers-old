import React, {Component} from 'react';
import NavBar from './NavBar';
import HomeContent from './HomeContent';

class HomePage extends Component {
  render() {
    let Content = null;
    if (this.props.route === '/') {
      Content = HomeContent;
    }
    return (
      <div>
        <NavBar route={this.props.route} />
        { Content != null ? <Content /> : null}
      </div>
    )
  }
}

export default (HomePage);
