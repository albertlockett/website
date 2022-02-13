import React, { ReactElement } from 'react'
import Navigation from './Navigation'

export default function Navigation(): ReactElement {
  return (
    <div className="blog-home">
      <div div className="page-description">
        Here is a collection of my articles about interesting technical subjects
      </div>
      <Navigation />
    </div>
  )
}
