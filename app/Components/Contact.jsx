import Link from 'next/link'
import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact_container'>
        <div className='wrapper contact_wrapper'>
            <div className='contact_base'>
                <h2>Based In Nigeria, Working WorldWide</h2>
                <Link href="/Contact">Get In Touch</Link>
            </div>
            <div className="contact_links">
                <div className='contact_social'>
                    <h2>Social</h2>
                    <a href="/">FaceBook</a><br/><br/>
                    <a href="/">Instagram</a><br/><br/>
                    <a href="/">Twitter</a><br/><br/>
                </div>

                <div className='contact_service'>
                    <h2>Services</h2>
                    <Link href="/Service">Cybersecurity Consulting</Link><br/><br/>
                    <Link href="/Service">Technical Support</Link><br/><br/>
                    <Link href="/Service">Hamgad Security Service</Link><br/><br/>
                </div>
            </div>
        </div>
        <div className='contactDown'>
            <p>Copyright <FaRegCopyright/> 2024. By: 3ppleAcE</p>
        </div>
    </div>
  )
}

export default Contact