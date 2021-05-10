import React, { ReactElement } from 'react'

type SkillProps = {
  category: string
  details: string[]
}

export default function Skill(props: SkillProps): ReactElement {
  return (
    <div className="skill">
      <div className="category">{props.category}</div>
      <div className="details">{props.details.join(' ')}</div>
    </div>
  )
}
