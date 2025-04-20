import Image from 'next/image';
import React from 'react'
import { GiBorderedShield, GiHeadphones, GiSecurityGate  } from "react-icons/gi";

const page = () => {
  const service =[
    {icons: <GiBorderedShield />, name: "Cybersecurity Consulting", details: "I help organizations assess their security posture and implement comprehensive cybersecurity strategies to stay ahead of evolving threats."},
    {icons: <GiHeadphones />, name: "Technical Support", details: "I provide comprehensive technical support and cybersecurity services, from troubleshooting issues and resolving vulnerabilities to implementing solutions that ensure ongoing system stability, security, and protection against evolving threats."},
    {icons: <GiSecurityGate />,name:"Hamgad Security Service", details: "Hamgad Security Service delivers comprehensive technical support and advanced cybersecurity protection, ensuring real-time threat detection and system stability while proactively safeguarding your digital assets against unauthorized access and malware"},
    {icons: <GiBorderedShield />, name: "Cybersecurity Consulting", details: "I help organizations assess their security posture and implement comprehensive cybersecurity strategies to stay ahead of evolving threats."},
    {icons: <GiHeadphones />, name: "Technical Support", details: "I provide comprehensive technical support and cybersecurity services, from troubleshooting issues and resolving vulnerabilities to implementing solutions that ensure ongoing system stability, security, and protection against evolving threats."},
    {icons: <GiSecurityGate />,name:"Hamgad Security Service", details: "Hamgad Security Service delivers comprehensive technical support and advanced cybersecurity protection, ensuring real-time threat detection and system stability while proactively safeguarding your digital assets against unauthorized access and malware"},
  ]

  return (
    <>
    <div className='container'>
        <div className='page_wrapper'>
              <div className='page_content'>
                  <div className='page_names'>
                      <h1>Services</h1>
                  </div>
              </div>
              <div className='page_image'>
                  <Image
                  src="/pexels-kevin-ku-92347-577585.jpg"
                  alt='My Image'
                  width={400}
                  height={500}
                  priority
                  quality={100}
                  />
              </div>
        </div>
      </div>



    <div className='service_container'>
        <div className='wrapper'>
            <h1>What I do</h1>
            <p className='service_sub'>I provide end-to-end cybersecurity services, from assessing risks to implementing and monitoring solutions, ensuring comprehensive protection and helping organizations stay ahead of evolving threats</p>
            <div className='service_grid_container'>
              {service.map((services, index) =>(
                <div className='what_i_do' key={index}>
                    <h2><span>{services.icons}</span>{services.name}</h2>
                    <p>{services.details}</p>
                </div>
                ))}

            </div>
        </div>
    </div>
    </>
  )
}

export default page