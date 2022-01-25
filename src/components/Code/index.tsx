import React, { ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Code(props): ReactElement {
  return (
    <SyntaxHighlighter language={props.language} style={docco}>
      {props.children ?? 'NO CHILDREN'}
    </SyntaxHighlighter>
  )
}
