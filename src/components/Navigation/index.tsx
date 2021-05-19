import React, { ReactElement, useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { ChevronUp } from 'react-feather'

import './styles.scss'

export default function Navigation(): ReactElement {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen(!open)
  }

  return (
    <div className={classnames('navigation', { open })}>
      <div className={classnames('link', 'underline-fadein')}>
        <Link to="/">home</Link>
      </div>
      <div className={classnames('link', 'underline-fadein')}>
        <Link to="/cv">cv</Link>
      </div>
      <div className={classnames('link', 'underline-fadein')}>
        <Link to="/contact">contact</Link>
      </div>
      <div className="control-icons" onClick={toggleOpen}>
        <ChevronUp size={48} strokeWidth={0.6} />
      </div>
    </div>
  )
}
