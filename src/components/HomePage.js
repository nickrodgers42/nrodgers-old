import React, {Component} from 'react';
import NavBar from './NavBar';

class HomePage extends Component {
  render() {
    console.log(this.props.route)
    return (
      <div>
        <NavBar route={this.props.route} />
        <div style={{ height: '100vh', backgroundColor: '#1F2833'}}></div>
      </div>
    )
  }
}

export default HomePage;
