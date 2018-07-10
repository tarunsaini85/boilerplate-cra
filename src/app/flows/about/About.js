import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../redux/connect'
import { Link } from 'react-router-dom'

class Page1Container extends Component {
  
  render() {
    return (
        <div className="About">
          <div>About Page <span className="fontIcons wf-Automobile"></span></div>
          <h1 >{this.props.appName}</h1>
          <Link to='/'>Home</Link>
          <br />
          <br />
          <Link to='/404'>404 Page</Link>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1Container);