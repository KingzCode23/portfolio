import React from 'react'
import './skill.css'
import Frontend from './Frontend'
import MSplatform from './MSplatform'
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <Frontend />

            <MSplatform />
        </div>
    </section>
  )
}

export default Skills