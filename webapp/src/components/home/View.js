// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import domtoimage from 'dom-to-image'

// App Imports
import {routes} from '../../setup/routes'
import {get, getList} from './api/actions'
import Loading from '../common/Loading'
import Item from './Item'

// Component
class View extends Component {

  componentDidMount() {
    this.props.getList()
    this.props.get(this.props.match.params.id)
  }

  renderImage(){
    var imageContent = document.getElementById('content-image');
    
    domtoimage.toPng(imageContent)
        .then(function (dataUrl) {
            var img = new Image();
            
            img.src = dataUrl;
            console.log(img, 'dataUrl');
            var imageExport = document.getElementById('export-image');
            // imageExport.innerHTML('');
            imageExport.innerHTML = "<img src='" + dataUrl + "' />";
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
  }

  render() {
    const { app, apps } = this.props;

    return (
      <div className="wrap">
        <div className="detail-app">
          <div className="left">
             {/* Single apps */}
              <div className="detail"  id ="content-image" >
              {
              this.props.app.isLoading
                ?
                <Loading message="Loading..."/>
                :
                (
                  this.props.app.item.id > 0
                    ?
                    <div className="result" id ="export-image"> 
                      <Link to={`/app/process/${app.item.id}`}>
                        <div>
                            <h1>{app.item.name}</h1>
                        </div>
                        <img src="http://hotfunapps.com/soulmates/images/ogshare.jpg" />
                        
                      </Link>
                      <a className="btn-process" onClick={()=>this.renderImage()}>
                        <b >Click here to know your Results</b>
                      </a>
                      <div className="des">
                          <p> Please Login with Facebook to see your Results. We don't share App Result on your Wall without your Permission. </p>
                          <p>You have been to war, seen success, experienced defeat, and created new allies within your clan. Now find out exactly which Clash of Clans” character are you!			
			
			</p>
                        </div>
                    </div>
                    :
                    <p>app does not exists.</p>
                )
              } 
              </div>
            <div className="list-apps">
              <h2>You may also Like:</h2>
              {apps.isLoading ? <Loading message="Loading data..."/> : (apps.list && apps.list.length > 0 ? (
                apps.list.map((item, index) => <Item item={item} key={index}/>)
              ) : <p>No apps to show.</p> ) }
            </div>
          </div>
          <div className="right sidebar">
            {apps.isLoading ? <Loading message="Loading data..."/> : (apps.list && apps.list.length > 0 ? (
              apps.list.map((item, index) => <Item item={item} key={index}/>)
            ) : <p>No apps to show.</p> ) }
          </div>
        </div>
      </div>
    )
  }
}

// Component Properties
View.propTypes = {
  app: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
}

// Component State
function viewState(state) {
  return {
    app: state.app,
    apps: state.apps
  }
}

export default connect(viewState, {get, getList})(View)