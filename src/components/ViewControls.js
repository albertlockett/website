import React from 'react'
import PropTypes from 'prop-types'
import { isDarkMode, toggleDarkMode } from '../utils/view-utils'


export default function ViewControls(props) {
  const darkModeFlag = isDarkMode()
  const darkModeClass = darkModeFlag ? 'view-controls-dark-mode' : ''
  const classes = [
    'view-controls',
    darkModeClass
  ].join(' ')

  const text = darkModeFlag ? 'Light Mode' : 'Dark Mode'

  return (
    <div className={classes} onClick={() => toggleDarkMode(props.onModeChange)}>{text}</div>
  )
}

ViewControls.propTypes = {
  onModeChange: PropTypes.func,
}