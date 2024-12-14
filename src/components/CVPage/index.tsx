import React, { Fragment, ReactElement } from 'react'
import classnames from 'classnames'

import { Download } from 'react-feather'
import Navigation from '../Navigation'
import Experience, { ExperienceProps } from './Experience'
import Skill from './Skill'
import {
  CompositSketch,
  CompositSketchSmile,
  LogoAliant,
  LogoAmbir,
  LogoEY,
  LogoLancedb,
  LogoSonrai,
  LogoSolo,
} from '../StaticImages'

import './styles.scss'

const skills = [
  {
    category: 'Rust',
    details: ['Arrow', 'Datafusion', 'actix', 'tokio'],
  },
  {
    category: 'go',
    details: ['grpc', 'gorm'],
  },
  {
    category: 'JavaScript',
    details: ['react', 'redux', 'webpack', 'jest', 'enzyme', 'graphql', 'node', 'express'],
  },
  {
    category: 'Java',
    details: ['spring framework', 'graphql', 'jsp', 'junit', 'hibernate'],
  },
  {
    category: 'database',
    details: ['oracle', 'mysql', 'postgres', 'elasticsearch', 'redis', 'janusgraph'],
  },
  {
    category: 'other',
    details: ['docker', 'kubernetes', 'aws', 'open-telemetry'],
  },
]

const experiences: ExperienceProps[] = [
  {
    company: 'LanceDB',
    title: 'Senior Software Engineer',
    startDate: {
      month: 'October',
      year: 2023,
    },
    responsibilities: [
      "Significant contributor to LanceDB's Enterprise / Cloud SaaS offerings",
      'Enhancing and optimizing REST APIs and backend services written in Rust',
      'Added low-level encodings for LanceV2 format',
      'Maintained LanceDB Node.js and Python clients',
      'Enhanced observability system using open-telemetry.',
      'Developed Helm charts and Terraform for streamlined deployment and infrastructure management across diverse cloud environments and storage solutions',
    ],
    picture: LogoLancedb,
  },
  {
    company: 'Solo.io',
    title: 'Senior Software Engineer',
    startDate: {
      month: 'November',
      year: 2022,
    },
    endDate: {
      month: 'October',
      year: 2023,
    },
    responsibilities: [
      'Designed and implemented build pipelines for custom patches of cilium',
      'Contributed to eBPF based solutions for TCP metrics and poc srv6 routing',
      'enhanced Istio gateway capabilities including WAF, DLP, Active Health Checking and regex path rewrite',
      'Added helm chart documentation to open-source solo-kit v2 chart generation library',
    ],
    picture: LogoSolo,
  },
  {
    company: 'Sonrai Security',
    title: 'Senior Software Engineer',
    startDate: {
      month: 'January',
      year: 2018,
    },
    endDate: {
      month: 'November',
      year: 2022,
    },
    responsibilities: [
      'Worked on Frontend UX design and implementation using JavaScript, React, Redux, HTML, CSS',
      'Primary developer of backend GraphQL Server using Java, Spring Framework',
      'Worked with NoSQL databases including JanusGraph, Elasticsearch, Redis',
      'Wrote analytics jobs using Spark, executing on AWS EMR',
      'Automated Testing using JUnit, Jest, Enzyme',
      'Deployed on AWS using Docker, Kubernetes, EKS Service',
    ],
    picture: LogoSonrai,
  },
  {
    company: 'EY Canada',
    title: 'Software Engineer',
    startDate: {
      month: 'June',
      year: 2014,
    },
    endDate: {
      month: 'December',
      year: 2017,
    },
    responsibilities: [
      'Software engineering in a consulting capacity',
      'Worked as team lead for four engineers and three QA professionals',
      'Front-end UX design and implementation using React, Redux, React Router, Draft.js & SASS, Javascript, JSP, jQuery, HTML, CSS',
      'Backend API design and implementation using JavaScript with Node.js, GraphQL, express,Sequelize ORM and Java with Spring Framework, Hibernate ORM',
      'Setup docker based development environment and created custom images to improve build speed on Gitlab CI by 80%',
      'Automated testing using JUnit, Mocha, Chai, Enzyme, ChimpJS',
      'Worked with MySQL and Oracle databases',
    ],
    picture: LogoEY,
  },
  {
    company: 'Ambir Solutions',
    title: 'Software Engineer',
    responsibilities: [
      'Software engineering in a consulting capacity',
      'Front-end application development using JSP, jQuery, Bootstrap',
      'Back-end application development using Java, Spring Framework, Struts',
      'Performed maintenance on J2EE based IVR system',
      'Wrote stored procedures and schema migration scripts for Oracle database',
    ],
    startDate: {
      month: 'August',
      year: 2013,
    },
    endDate: {
      month: 'June',
      year: 2014,
    },
    picture: LogoAmbir,
  },
  {
    company: 'Bell Aliant',
    title: 'Technical Sales Support',
    responsibilities: [
      'Supported enterprise sales engineering team at regional telco',
      'Initiated orders for VLAN and firewall configuration changes on Cisco and Juniper appliances',
      'Wrote code using C to automate lookup of network circuit configurations in internal systems',
      'Supported sales efforts by visiting clients and gathering requirements',
    ],
    dateRaw: `summers '10, '11, '12`,
    picture: LogoAliant,
  },
]

export default function CVPage(): ReactElement {
  return (
    <div className={classnames('page', 'cv-page')}>
      <div className={classnames('section', 'summary')}>
        <Navigation />
        <div className="title">
          Albert Lockett
          <span className="download-icon">
            <a href="/albert-lockett-cv-current.pdf" target="_blank">
              <Download />
            </a>
          </span>
        </div>
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
      <div className={classnames('section', 'experiences')}>
        <div className="section-title">Experience</div>
        <div className="experience">
          {experiences.map((experience) => (
            <Fragment key={experience.company}>
              <Experience {...experience} />
            </Fragment>
          ))}
        </div>
      </div>
      <div className={classnames('section', 'education')}>
        <div className="section-title">Education</div>
        <div className="details">
          <div className="school">University of New Brunswick</div>
          <div className="program">BSc Computer Engineering / 09-'13</div>
        </div>
      </div>
    </div>
  )
}
