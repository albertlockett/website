import React, { ReactElement } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function Navigation(): ReactElement {
  return (
    <div className="article-nav">
      <div className={classNames('link', 'underline-fadein')}>
        <Link to="/articles/terry-sso/terry-sso1">
          Terry SSO: Understanding OAuth 2.0 PCKE Flow (Hands-on Approach)
        </Link>
      </div>
    </div>
  )
}
