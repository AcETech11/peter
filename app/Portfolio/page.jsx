import Image from 'next/image'
import React from 'react'

const page = () => {
  const portfolio = [
    {
        name: 'Project 1',
        image: "/portfolio-01-free-img.jpg",
        url: "/"
    },
    {
        name: 'Project 2',
        image: "/portfolio-02-free-img.jpg",
        url: '/'
    },
    {
        name: 'Project 3',
        image: "/portfolio-03-free-img.jpg",
        url: "/"
    },
    {
        name: 'Project 4',
        image: "/portfolio-04-free-img.jpg",
        url: '/'
    },
    {
        name: 'Project 5',
        image: "/portfolio-05-free-img.jpg",
        url: "/"
    },
    {
        name: 'Project 6',
        image: "/portfolio-06-free-img.jpg",
        url: "/"
    }
    // Add more projects here...
]
return (
  <>
   <div className='container'>
        <div className='page_wrapper'>
              <div className='page_content'>
                  <div className='page_names'>
                      <h1>My Work</h1>
                  </div>
              </div>
              <div className='page_image'>
                  <Image
                  src="/pexels-goumbik-574077.jpg"
                  alt='My Image'
                  width={400}
                  height={500}
                  priority
                  quality={100}
                  />
              </div>
        </div>
      </div>

    <div className='portfolio_container'>
        <div className='wrapper'>
            <h1>Portfolio</h1>
            <div className='portfolio_grid_container'>       
                {portfolio.map((project, index) => (
                    <div key={index} className='project' >
                        <a href={project.url} target='_blank'>
                            <Image src={project.image} alt={project.name} width={320} height={450} objectFit='cover' />
                            <h3>{project.name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
</>
)
}

export default page