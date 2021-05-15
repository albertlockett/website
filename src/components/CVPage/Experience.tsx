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
  dateRaw: string
}

function formatDate(date) {
  return `${date.month.substring(0, 3)}'${date.year - 2000}`
}

function Date(props: ExperienceProps): string {
  if (props.dateRaw) {
    return props.dateRaw
  }

  const startText = formatDate(props.startDate)
  const endDate = props.endDate ? formatDate(props.endDate) : 'present'
  return `${startText}-${endDate}`
}

export default function Experience(props: ExperienceProps): ReactElement {
  return (
    <div className="experience">
      <div className="company">{props.company}</div>
      <div className="title">{props.title}</div>
      <span className="date-sep">/</span>
      <div className="date">
        <Date {...props} />
      </div>
      <div className="responsibilities">
        {props.responsibilities.map((text, i) => (
          <div key={i} className="responsibility">
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
