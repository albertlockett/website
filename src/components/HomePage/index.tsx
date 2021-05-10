import React, { ReactElement } from 'react'
import classnames from 'classnames'

// import homeImg from '../../../static/images/working_copy.png'

import Navigation from '../Navigation'
import './styles.scss'

export default function HomePage(): ReactElement {
  return (
    <div className={classnames(['home-page', 'page'])}>
      <Navigation />
      <div className="body">
        <div className="title">Albert Lockett</div>
        <div className="message">
          Software engineer living & working in Montreal, QC . Leading development teams, supporting operational teams,
          and assisting with data analytics engagements. He enjoys building software and has experience with many
          web-related technologies.
        </div>
      </div>
      {/* <div div className="home-img" scale="0.5">
        <img src={homeImg} />
      </div> */}
    </div>
  )
}
