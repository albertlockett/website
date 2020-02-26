/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import ViewControls from './viewControls'
import { isDarkMode } from '../utils/view-utils'
import "./layout.css"


//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const Layout = ({ children }) => {
  const [initialRender, setInitialRender] = useState(true)
  const forceUpdate = useForceUpdate()

  if (initialRender) {
    console.log("initial render")
    setTimeout(() => {
      setInitialRender(false)
    }, 0)
    return <div />
  }

  const darkMode = isDarkMode()
  const darkModeClass = darkMode ? 'page-content-darkmode' : ''

  const classes = [
    'page-content',
    darkModeClass
  ].join(' ')

  const rerender = () => {
    console.log('rerendering')
    forceUpdate()
  }

  console.log({ darkMode, classes })
  return (
    <div className={classes}>
      <ViewControls onModeChange={rerender} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
