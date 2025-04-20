import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";

const Skills = () => {
  // Add your skills data here in the following format:
  const skills= [
    {name: 'HTML5', percentage: 95},
    {name: 'CSS3', percentage: 90},
    {name: 'JavaScript', percentage: 85},
    {name: 'React', percentage: 65},
    // Add more skills here...
  ]

const Experience = [
  {company: 'Company A', position: 'Software Engineer', duration: '2020-2021', decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus asperiores voluptates repellendus voluptatem velit ullam pariatur numquam debitis quasi a."},
  {company: 'Company B', position: 'Senior Software Engineer', duration: '2021-2023', decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus asperiores voluptates repellendus voluptatem velit ullam pariatur numquam debitis quasi a."},
  {company: 'Company c', position: 'Senior Software Engineer', duration: '2023-Present', decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus asperiores voluptates repellendus voluptatem velit ullam pariatur numquam debitis quasi a."}
  // Add more experiences here...
]

  return (
    <div className='skills_container'>
      <div className='wrapper skills_grid_container'>
          <div className='skills'>
            <h2>Skills</h2>
            <div className='skills_content'>
              {skills.map((skill, index) => (
                <div key={index} className='skills_text'>
                  <h3>{skill.name}</h3>
                  <div className='progress'>
                    <div className='progress-bar' style={{width: `${skill.percentage}%`}}>
                      <p>{skill.percentage}%</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>



          {/* Experience */}
          <div className='experience'>
            <h2>Experience</h2>
            <div>
              {Experience.map((exp, index) => (
                <div key={index} className='exp_content'>
                  <div className='exp_left'>
                    <h3>{exp.duration}<span className='arrow'><FaArrowAltCircleRight /></span><FaArrowAltCircleDown className='arrowDown'/></h3>
                    <span><hr/></span>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className='exp_right'>
                    <h5>{exp.position}</h5>
                    <p>{exp.decription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills