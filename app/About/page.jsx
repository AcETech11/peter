import Image from 'next/image'
import React from 'react'
import About from '../Components/About'
import Skills from '../Components/Skills'

const page = () => {
  return (
    <>
      <div className='container'>
        <div className='page_wrapper'>
              <div className='page_content'>
                  <div className='page_names'>
                      <h1>About</h1>
                  </div>
              </div>
              <div className='page_image'>
                  <Image
                  src="/Cybersecurity-Projects.jpeg"
                  alt='My Image'
                  width={400}
                  height={500}
                  priority
                  quality={100}
                  />
              </div>
        </div>
      </div>
      <About/>
      <Skills/>
    </>
  )
}

export default page