// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {getList} from './api/actions'
import Loading from '../common/Loading'
import { app } from './api/state';
import Item from './Item'

// Component
class Home extends Component {

  componentDidMount() {
    this.props.getList()
  }

  render() {
    console.log('apps', this.props.apps);
    const { apps } = this.props;

    return (
      <div className="wrap">
        <h1>HOT APP FOR YOU</h1>
        <b>Hot Fun Apps portal have collection of Best Facebook entertaining quiz Apps for your entertainment with more than 50+ facebook apps. These apps analyze your facebook interactions to arrive at any conclusion about you. Enjoy them, do not take them seriously and do not forget to share them with your friends.</b>
        <div className="list-apps">
          {apps.isLoading ? <Loading message="Loading data..."/> : (apps.list && apps.list.length > 0 ? (
            apps.list.map((item, index) => <Item item={item} key={index}/>)
          ) : <p>No apps to show.</p> ) }
        </div>
      </div>
    )
  }
}

// Component Properties
Home.propTypes = {
  apps: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
}

// Component State
function appsState(state) {
  return {
    apps: state.apps
  }
}

export default connect(appsState, {getList})(Home)