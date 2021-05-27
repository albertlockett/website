import React, { ReactElement } from 'react'

import Navigation from '../Navigation'
import { FatherSelf, TerrySelf RJ45 } from '../StaticImages'

import './styles.scss'

export default function LinksPage(): ReactElement {
  return (
    <div
      className="links-page"
      style={{
        background: `url("${RJ45}")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <Navigation />
      <div className="title">
        LINKS
      </div>
      <div className="links">
        <div className={"father-link"}>
          <img src={FatherSelf} />
          <a className="link" href="http://lockett.ca">John</a>
        </div>
        <div className={"terry-link"}>
          <img src={TerrySelf} />
          <a className="link" href="http://lockett.ca">Terry</a>
        </div>
      </div>
    </div>
  )
}
