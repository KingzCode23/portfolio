import React, { useState } from 'react'
import './service.css'

const Service = () => {
  
  const [ToggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  } 

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web page <br /> Designer</h3>

                </div>
                <span className="services__button" onClick={()=> toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={ToggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
                        <h3 className="services__modal-title">Web page Designer</h3>
                        <p className="services__modal-description">Service with experience(OJT) of 
                        3 months with Quality Assurance & Front-end Developer. Providing 
                        Quality Work.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page Development </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interactions. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Writing Test case </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br /> Designer </h3>

                </div>
                <span className="services__button"  onClick={()=> toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={ToggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
                        <h3 className="services__modal-title">UI/UX Designer</h3>
                        <p className="services__modal-description">Service with experience(OJT) of 
                        3 months with Quality Assurance & Front-end Developer. Providing 
                        Quality Work.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page Development </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interactions. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Writing Test case </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Quality <br /> Assurance </h3>

                </div>
                <span className="services__button"  onClick={()=> toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={ToggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
                        <h3 className="services__modal-title">Quality Assurance </h3>
                        <p className="services__modal-description">Service with experience(OJT) of 
                        3 months with Quality Assurance & Front-end Developer. Providing 
                        Quality Work.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Writing Test case </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Executing Test case </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creating System Specification </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service