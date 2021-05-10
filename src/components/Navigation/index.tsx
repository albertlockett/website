import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export default function Navigation(): ReactElement {
  return (
    <div className="navigation">
      <div className="link">
        <Link to="/">home</Link>
      </div>
      <div className="link">
        <Link to="/cv">cv</Link>
      </div>
      <div className="link">
        <Link to="/contact">contact</Link>
      </div>
    </div>
  )
}
