import React from 'react';
import './Projects.css';
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.png';
import IMG5 from '../../assets/project5.png';
import IMG6 from '../../assets/project6.png';

const data = [
    {
        id: 1,
        title: "Nexoria Website UX/UI Design",
        image: IMG1,
        github: "https://github.com/Andres22-sys/nexoria",
        liveDemo: "https://nexoria-gamma.vercel.app/"
    },
    {
        id: 2,
        title: "Huckleberry Website UX/UI Design",
        image: IMG2,
        github: "https://github.com/Andres22-sys/pastry-web",
        liveDemo: "https://pastry-web.vercel.app/"
    },
    {
        id: 3,
        title: "Modern Restaurant Website UX/UI Design",
        image: IMG3,
        github: "https://github.com/Andres22-sys/Modern_UX-UI_Restaurant",
        liveDemo: "https://modern-ux-ui-restaurant.vercel.app/"
    },
    {
        id: 4,
        title: "Cinema Website UX/UI Design",
        image: IMG4,
        github: "https://github.com/Andres22-sys/cinamaniac-web",
        liveDemo: "https://cinamaniac-web.vercel.app/"
    },
    {
        id: 5,
        title: "Modern Business Website UX/UI Design",
        image: IMG5,
        github: "https://github.com/Andres22-sys/Project_Hoobank",
        liveDemo: "https://hoobank-alpha-nine.vercel.app/"
    },
    {
        id: 6,
        title: "Coffee Shop Website UX/UI Design",
        image: IMG6,
        github: "https://github.com/Andres22-sys/teashop-web",
        liveDemo: "https://teashop-web.vercel.app/"
    },
];

const Projects = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, liveDemo }) => {
                    return (
                        // Add the key prop here on the top-level element
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                                <a href={liveDemo} className="btn btn-primary" target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
