import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class navbar extends Component {
  render() {
    return (
      <div>
        <ul>
            <Link to='/'>Home</Link>&nbsp;
            <Link to="/signup">Signup</Link>&nbsp;
           <Link to="/login">Login</Link>
            
        </ul>
      </div>
    )
  }
}
