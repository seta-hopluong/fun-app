// Imports
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import {renderIf} from '../../setup/helpers'
import {menuShow, menuHide, messageHide} from './api/actions'
import Menu from './Menu';
import images from '../../assets/images';

// Component
class Layout extends Component {

  render() {
    const {children} = this.props

    return (
      <div>
        {/* Header */}
        <header className="header">
          {renderIf(this.props.common.menuIsVisible, () => (
            <div className="wrap">
              <img className='logo' src={images.logo} />
              <Menu/>
            </div>
          ))}

          {/* Header visible toggle button */}
          {
            this.props.common.menuIsVisible
              ?
              <button onClick={this.props.menuHide}>Hide Menu</button>
              :
              <button onClick={this.props.menuShow}>Show Menu</button>
          }
        </header>


        {/* Message */}
        {renderIf(this.props.common.message.open, () => (
          <div>
            {this.props.common.message.text.map((text, i) => (
              <p key={i}>
                <mark>{text}</mark>
              </p>
            ))}

            <button onClick={this.props.messageHide}>Hide Messages</button>

            <hr/>
          </div>
        ))}

        {/* Page content */}
        <section className="content">
          {children}
        </section>
        <footer className="footer">
          <div className="wrap">
             <p>developed by Steve Luong, CopyRight 2018.</p>
          </div>
        </footer>
      </div>
    )
  }
}

// Component Properties
Layout.propTypes = {
  common: PropTypes.object.isRequired,
  menuShow: PropTypes.func.isRequired,
  menuHide: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function commonState(state) {
  return {
    common: state.common
  }
}

export default connect(commonState, {menuShow, menuHide, messageHide})(Layout)