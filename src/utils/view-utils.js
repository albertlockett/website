import isBoolean from 'lodash/isBoolean'
const DARK_MODE = 'VIEW_MODE/darkMode'

export function isDarkMode() {
  try {
    const darkMode = localStorage.getItem(DARK_MODE)
    console.log(darkMode)
    return "true" === darkMode ? true : false
  } catch (e) {
    // gatsby uses some garbage serverside renderer
    // so we need this stupid try/catch check
    // otherwise it's localstorage is undefined
    return false
  }
}

export function toggleDarkMode(callback) {
  setDarkMode(!isDarkMode(), callback)
}

export function setDarkMode(darkMode, callback) {
  if (!isBoolean(darkMode)) {
    throw new Error('argument needs to be boolean');
  }
  
  localStorage.setItem(DARK_MODE, '' + darkMode)

  if (callback) {
    callback()
  }
}