import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title"> Front-end Developer </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-html5 icon-1"></i>
                        <div>
                           <h3 className="skills__name">HTML</h3>
                           <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-css3 icon-2"></i>
                        <div>
                           <h3 className="skills__name">CSS</h3>
                           <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-javascript icon-3"></i>
                        <div>
                           <h3 className="skills__name">Javascript</h3>
                           <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-react icon-4" ></i>
                        <div>
                           <h3 className="skills__name">React</h3>
                           <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-adobe icon-5"></i>
                        <div>
                           <h3 className="skills__name">AdobeXD</h3>
                           <span className="skills__level">Internediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-adobe icon-5"></i>
                        <div>
                           <h3 className="skills__name">Photoshop</h3>
                           <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Frontend