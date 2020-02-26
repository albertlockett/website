import React from 'react'

import PoppingImage from '../components/poppingImage'

function getComponent(definition) {
  
  if (definition.type === 'root') {
    return 'div'
  }

  if (definition.type === 'element') {
    return definition.tagName
  }

  console.warn('could not determine component type for defniition', definition)
  return 'span'
}

function renderComponent(definition) {
  if (definition.type === 'text') {
    return definition.value
  }

  if (definition.type === 'element' && definition.tagName === 'img') {
    console.log(definition)
    return <PoppingImage {...definition.properties} />
  }

  const children = []

  if (undefined !== definition.children) {
    for (let child of definition.children) {
      children.push(renderComponent(child))
    }
  }

  const component = getComponent(definition);

  const props = {}
  if (component === 'a') {
    if (!(definition.properties.href || '.png').endsWith('.png')) {
      props.href = definition.properties.href
    }
  }

  return React.createElement(component, props, children)
}

export default function renderFullAst(htmlAst) {
  return renderComponent(htmlAst)
}