import React from 'react'
import "./About.css"
import aboutImg from "../../assets/image/notFound.png"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content flex flex-c'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          {/* <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>
              About BookHub
            </h2>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About