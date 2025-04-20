import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='container'>
        <div className='page_wrapper'>
              <div className='page_content'>
                  <div className='page_names'>
                      <h1>Contact</h1>
                  </div>
              </div>
              <div className='page_image'>
                  <Image
                  src="/photo-1526925539332-aa3b66e35444.avif"
                  alt='My Image'
                  width={400}
                  height={500}
                  priority
                  quality={100}
                  />
              </div>
        </div>
      </div>
      <div className='contact_form'>
        <div className='contact_text'>
          <h2>Send Me A Message</h2>
          <p>Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
        </div>
        <form className='contact'>
            <input type='text' name='name' placeholder='Enter Full Name' required /><br/>
            <input type='email' name='email' required placeholder='Enter Email Address' /><br/>
            <textarea name='message' placeholder='Message' required></textarea><br/>
            <button type='submit'>Submit</button>  {/* Add your form submission logic here */}
        </form>
      </div>
    </>
  )
}

export default page