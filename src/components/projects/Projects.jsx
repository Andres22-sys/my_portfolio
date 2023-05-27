import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/projects6.png'

const data = [
    {
        id: 1,
        title: "GPT-3 Website UX/UI Design",
        image: IMG1,
        github: "https://github.com/Andres22-sys/gpt-3-UX-UI",
        liveDemo: "https://gpt3-dominguez.space/"
    },
    {
        id: 2,
        title: "Huckleberry Website UX/UI Design",
        image: IMG2,
        github: "https://github.com/Andres22-sys/Huckleberry_pastry",
        liveDemo: "https://andres22-sys.github.io/Huckleberry_pastry/"
    },
    {
        id: 3,
        title: "Modern Restaurant Website UX/UI Design",
        image: IMG3,
        github: "https://github.com/Andres22-sys/Modern_UX-UI_Restaurant",
        liveDemo: "https://gericht-restaurant.shop/"
    },
    {
        id: 4,
        title: "Cinema Website UX/UI Design",
        image: IMG4,
        github: "https://github.com/Andres22-sys/Cinemaniacs_website",
        liveDemo: "https://andres22-sys.github.io/Cinemaniacs_website/"
    },
    {
        id: 5,
        title: "Modern Business Website UX/UI Design",
        image: IMG5,
        github: "https://github.com/Andres22-sys/Modern_UX-UI_HooBankWeb",
        liveDemo: "https://modern-website.online/"
    },
    {
        id: 6,
        title: "Coffee Shop Website UX/UI Design",
        image: IMG6,
        github: "https://github.com/Andres22-sys/tea-cozy-web-project",
        liveDemo: "https://andres22-sys.github.io/tea-cozy-web-project/"
    },
]

const Projects = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, liveDemo}) => {
                        return (
                            <article className="portfolio__item">
                                <div key={id} className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                                    <a href={liveDemo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects