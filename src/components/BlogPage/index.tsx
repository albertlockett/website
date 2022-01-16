import React, { ReactElement } from 'react'
import classnames from 'classnames'

import Helloo from './Test.mdx'
import './styles.scss'

export default function BlogPage(): ReactElement {
  return (
    <div>
      Hello, world!
      <Helloo />
    </div>
  )
}
