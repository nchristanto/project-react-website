import React from 'react'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/">Plan a Journey</Link>
            </li>
            <li>
              <Link to ="/">Fare</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
} 
export default Navigation