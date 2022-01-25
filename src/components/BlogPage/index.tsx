import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { useLocation, Link, Switch, Route } from 'react-router-dom'


import IneffJavaHashSet from './innefective-java/set-contains.mdx'
import SportsBettingIntro from './sports-betting-site/intro.mdx'
import SportsBettingPart1 from './sports-betting-site/part-1.mdx'
import SportsBettingPart2 from './sports-betting-site/part-2.mdx'
import TerrySSO1 from './terry-sso/terry-sso1.mdx'

import './styles.scss'

export default function BlogPage(props): ReactElement {
  const location = useLocation()
  console.log({ props })
  console.log({ location })
  return (
    <div>
      <div>
        <Link to="/articles/terry-sso/terry-sso1">Terry SSO (WIP)</Link>
      </div>
      <div className={classnames('article')}>
        <Switch>
          <Route path="/articles/ineffective-java/set-contains">
            <IneffJavaHashSet />
          </Route>
          <Route path="/articles/sports-betting/intro">
            <SportsBettingIntro />
          </Route>
          <Route path="/articles/sports-betting/part-1">
            <SportsBettingPart1 />
          </Route>
          <Route path="/articles/sports-betting/part-2">
            <SportsBettingPart2 />
          </Route>
          <Route path="/articles/terry-sso/terry-sso1">
            <TerrySSO1 />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
