import React from 'react'
import './About.css'
import pobarulislam from '../About/pobarul.islam.jpg'
const About = () => {
  return (
    <div className='container mt-5 about'>
      <div className='about-info col-6'>
        <h1 className=''>About Us</h1>
        <p className='mt-2'>ISO certification certifies that a management system, manufacturing process, service, or documentation procedure has all the requirements for standardization and quality assurance. ISO (International Organization for Standardization) is an independent, non-governmental, international organization that develops standards to ensure the quality, safety, and efficiency of products, services, and systems.</p>
        <button className='btn btn-primary'>Learn More</button>
      </div>
      <div className='col-6'>
        <img className='w-50' src={pobarulislam} alt="" />
      </div>
    </div>
  )
}

export default About