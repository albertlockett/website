import React, { Fragment, ReactElement } from 'react'
import classnames from 'classnames'

import Navigation from '../Navigation'
import Experience from './Experience'
import Skill from './Skill'

import { CompositSketch, CompositSketchSmile } from '../StaticImages'

import './styles.scss'

const skills = [
  {
    category: 'JavaScript',
    details: ['react', 'redux', 'webpack', 'jest', 'enzyme', 'graphql', 'node', 'express'],
  },
  {
    category: 'Java',
    details: ['spring framework', 'graphql', 'jsp', 'junit', 'hibernate'],
  },
  {
    category: 'go',
    details: ['grpc', 'grom'],
  },
  {
    category: 'database',
    details: ['oracle', 'mysql', 'postgres', 'elasticsearch', 'redis', 'janusgraph'],
  },
  {
    category: 'other',
    details: ['docker', 'kubernetes', 'aws'],
  },
]

const experiences = [
  {
    company: 'Sonrai Security',
    title: 'Senior Software Engineer',
  },
]

export default function CVPage(): ReactElement {
  return (
    <div className={classnames('page', 'cv-page')}>
      <div className={classnames('section', 'summary')}>
        <Navigation />
        <div className="title">Albert Lockett</div>
        <div className="summary-content">
          <div className="face-picture">
            <span>
              <img className="normal" src={CompositSketch} />
              <img className="smile" onClick={() => alert('ouch!')} src={CompositSketchSmile} />
            </span>
          </div>
          <div className="skills">
            {skills.map((skill) => (
              <Fragment key={skill.category}>
                <Skill {...skill} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className={classnames('sections', 'experiences')}>
        <div className="experience">
          {experiences.map((experience) => (
            <Fragment key={experience.company}>
              <Experience {...experience} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
