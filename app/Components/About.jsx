import React from 'react'

const About = () => {
  return (
    <div className='about_container'>
        <div className='wrapper'>
            <p className='about_me'>About me</p>
            <div className='about_bio'>
                <h2>I am a Security Agent based in Nigeria, with a rich experience of over 6 years in a Security agent & Cybersecurity.</h2>
            </div>
            <div className='about_experience'>
                <p className='company'>I'm the CEO of Fieldy.co Limited</p>
                <div>
                    <p className='paragraph_bold'>With years of experience in cybersecurity, I have honed the skills to protect systems and networks from ever-evolving threats. Having worked with a range of businesses across different industries, I understand the unique security challenges they face. My expertise spans across areas such as network security, vulnerability assessment, penetration testing, and incident response, ensuring that your data and systems are safeguarded against breaches.</p>
                    <p className='paragraph_bold light'>I’ve spent the majority of my career developing and implementing robust security measures, from securing web applications to safeguarding mobile platforms. Having worked on various high-stakes projects, I can offer informed recommendations and solutions that fit your specific needs. I believe in a collaborative approach, where you are not forced into one-size-fits-all solutions but provided with a range of options to protect your assets effectively.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About