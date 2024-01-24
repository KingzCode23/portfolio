import React from 'react'
import './work.css'
import Porfolio from './Porfolio'


const Work = () => {
  return (
    <section className="work section" id="porfolio">
        <h2 className="section__title">Porfolio</h2>
        <span className="section__subtitle">Most recent works</span>
 
        <Porfolio />
    </section>
  )
}

export default Work