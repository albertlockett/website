import React, { ReactElement } from 'react'
import classnames from 'classnames'

import homeImg from '../../../static/images/me_quebec.png'

import Navigation from '../Navigation'
import './styles.scss'

export default function HomePage(): ReactElement {
  return (
    <div className={classnames(['home-page', 'page'])}>
      <Navigation />
      <div className="body">
        <div className="title">Albert Lockett</div>
        <div className="message">"Professional Software engineer"</div>
      </div>
      <div className="home-img" scale="0.5">
        <img src={homeImg} />
      </div>
    </div>
  )
}
