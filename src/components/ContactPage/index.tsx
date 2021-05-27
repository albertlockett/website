import React, { ReactElement } from 'react'
import classnames from 'classnames'
import Navigation from '../Navigation'

import './styles.scss'

export default function ContactPage(): ReactElement {
  return (
    <div className="contact-page">
      <Navigation />
      <div className="content">
        <div className="title">Contact</div>
        <div className="location">Montreal, QC</div>
        <div className="links">
          {/* email */}
          <div className={classnames('link', 'underline-fadein')}>
            <div className="label">Email</div>
            <div className="content">
              <a href="mailto:albert.lockett@gmail.com">albert.lockett@gmail.com</a>
            </div>
          </div>
          {/* linkedin */}
          <div className={classnames('link', 'underline-fadein')}>
            <div className="label">Connect</div>
            <div className="content">
              <a target="_blank" href="https://www.linkedin.com/in/albert-lockett-18770255/">
                Linkedin
              </a>
            </div>
          </div>
          {/* code */}
          <div className={classnames('link', 'underline-fadein')}>
            <div className="label">portfolio</div>
            <div className="content">
              <a target="_blank" href="https://github.com/albertlockett">
                github
              </a>
            </div>
          </div>
          {/* social */}
          <div className={classnames('link', 'underline-fadein')}>
            <div className="label">social</div>
            <div className="content">
              <a target="_blank" href="https://twitter.com/albertlockett">
                twitter
              </a>
              <span className="link-sep"> / </span>
              <a target="_blank" href="https://www.instagram.com/kilgoretrout_99/">
                insta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
