import React, { useState } from 'react'
import './qualification.css'
const Qualification = () => {


   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
    setToggleState(index);
   }




  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={
            toggleState === 1 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button  button--flex"}
            onClick={()=> toggleTab(1)}
            >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={
            toggleState === 2 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button  button--flex"}
            onClick={()=> toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={toggleState === 1 
          ? "qualification__content qualification__content-active" 
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BSIT</h3>
                <span className="qualification__subtitle">NSC - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React </h3>
                <span className="qualification__subtitle">CodeBootcamp</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> september-october present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development </h3>
                <span className="qualification__subtitle">CodeBootcamp</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> june-october present
                </div>
              </div>
              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI design</h3>
                <span className="qualification__subtitle">Self-taught</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> january-may 2023
                </div>
              </div>
            </div>
          </div>


          <div className={toggleState === 2
          ? "qualification__content qualification__content-active" 
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Capstone Web Design</h3>
                <span className="qualification__subtitle">NSC - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> january-may 2023
                </div>
              </div>
              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Quality Assurance </h3>
                <span className="qualification__subtitle">Intechsive</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> june-september 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development </h3>
                <span className="qualification__subtitle">CodeBootcamp</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> june-october present
                </div>
              </div>
              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification