import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../redux/connect'
import { Link } from 'react-router-dom'

class HomeContainer extends Component {
  constructor(){
    super()
    this.updateAppName = this.updateAppName.bind(this);
  }
  updateAppName(){
    let val = document.querySelector('#appNameInput').value;
    this.props.updateAppName(val);
  }
  componentWillMount(){
    window.lfStore.getItem("cra_app_2_STORE").then(
      (v)=>{
        if(v && v.appName)
          this.props.updateAppName(v.appName)
      }
    ).catch()
  }
  render() {
    return (
        <div className="HomePage">
          <div>Home Page <span className="fontIcons wf-Accounting"></span></div>
          <h1 >{this.props.appName}</h1>
          <div>
          <input type="text" id="appNameInput" placeholder="Type something to update"/><button onClick={this.updateAppName}>Update</button>
            <br />
            <i>Type something above and click update. Once updated, try refreshing your page. the updated text to be retained as is.</i>
          </div>
          <br />
          <Link to='/about'>About Page</Link>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);