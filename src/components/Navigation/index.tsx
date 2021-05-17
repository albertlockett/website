import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import './styles.scss'

export default function Navigation(): ReactElement {
  return (
    <div className="navigation">
      <div className={classnames('link', 'underline-fadein')}>
        <Link to="/">home</Link>
      </div>
      <div className={classnames('link', 'underline-fadein')}>
        <Link to="/cv">cv</Link>
      </div>
      <div className={classnames('link', 'underline-fadein')}>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  )
}
