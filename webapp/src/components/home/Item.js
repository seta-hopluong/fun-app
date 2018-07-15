// Imports
import React from 'react'
import {Link} from 'react-router-dom'

// App Imports

// Component
const Item = (props) => {
    const { item } = props;
    return(
        <div className="item">
          <Link to={`/app/${item.id}`}>
              <img src="http://hotfunapps.com/soulmates/images/ogshare.jpg" />
              <div>
                  <h3>{item.name}</h3>
              </div>
          </Link>
        </div>
      )
}

export default Item