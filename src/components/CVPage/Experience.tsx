import React, { ReactElement } from 'react'

type ExperienceProps = {
  company: string
  title: string
  responsibilities: string[]
  startDate: {
    month: string
    year: number
  }
  endDate: {
    month: string
    year: number
  }
}

export default function Experience(props: ExperienceProps): ReactElement {
  return (
    <div className="experience">
      <div className="company">{props.company}</div>
      <div className="title">{props.title}</div>
    </div>
  )
}
