import Image from 'next/image';
import React from 'react'
import { MdEmail, MdOutlinePhoneForwarded } from "react-icons/md";

const Hero = () => {
  return (
    <div className='hero_container'>
        <div className='hero_video_container'>
            <video src="/87786-602074234.mp4" autoPlay loop width="100%" height="auto" muted>
            Your browser does not support the video tag.
            </video>
        </div>
        <div className='hero_wrapper'>
            <div className='hero_content'>
                <div className='hero_text'>
                    <h4>HELLO, MY NAME IS</h4>
                </div>
                <div className='hero_names'>
                    <h1>MICHEAL PETER</h1>
                    <h2>Security Agent</h2>
                </div>
                <div className='hero_links'>
                    <p><MdEmail /> <span>michealpee747@gmail.com</span></p>
                    <p><MdOutlinePhoneForwarded /> <span>+234 814 424 4201</span></p>
                </div>
            </div>
            <div className='hero_image'>
                <Image
                src="/MyImage.jpg"
                alt='My Image'
                width={400}
                height={500}
                priority
                quality={100}
                />
            </div>
        </div>
    </div>
  
  )
}

export default Hero