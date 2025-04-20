import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
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
    <div className='portfolio_container'>
        <div className='wrapper'>
            <h1>Portfolio</h1>
            <div className='portfolio_grid_container'>       
                {portfolio.slice(0, 3).map((project, index) => (
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
  )
}

export default Portfolio