import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../redux/connect'
import { Link } from 'react-router-dom'

class Page1Container extends Component {
  
  render() {
    return (
        <div className="About">
          <h1 >404 Not Found Page</h1>
          <Link to='/'>Home</Link>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1Container);