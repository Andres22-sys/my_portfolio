interface Project {
  id: number;
  title: string;
  image: string;
  github: string;
  liveDemo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Nexoria Website UX/UI Design',
    image: '/assets/project1.png',
    github: 'https://github.com/Andres22-sys/nexoria',
    liveDemo: 'https://nexoria-gamma.vercel.app/',
  },
  {
    id: 2,
    title: 'Huckleberry Website UX/UI Design',
    image: '/assets/project2.png',
    github: 'https://github.com/Andres22-sys/pastry-web',
    liveDemo: 'https://pastry-web.vercel.app/',
  },
  {
    id: 3,
    title: 'Modern Restaurant Website UX/UI Design',
    image: '/assets/project3.png',
    github: 'https://github.com/Andres22-sys/Modern_UX-UI_Restaurant',
    liveDemo: 'https://modern-ux-ui-restaurant.vercel.app/',
  },
  {
    id: 4,
    title: 'Cinema Website UX/UI Design',
    image: '/assets/project4.png',
    github: 'https://github.com/Andres22-sys/cinamaniac-web',
    liveDemo: 'https://cinamaniac-web.vercel.app/',
  },
  {
    id: 5,
    title: 'Modern Business Website UX/UI Design',
    image: '/assets/project5.png',
    github: 'https://github.com/Andres22-sys/Project_Hoobank',
    liveDemo: 'https://hoobank-alpha-nine.vercel.app/',
  },
  {
    id: 6,
    title: 'Coffee Shop Website UX/UI Design',
    image: '/assets/project6.png',
    github: 'https://github.com/Andres22-sys/teashop-web',
    liveDemo: 'https://teashop-web.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="mt-32 lg:mt-24">
      <h5 className="section-subtitle">My Recent Work</h5>
      <h2 className="section-title">Projects</h2>

      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10">
        {projects.map(({ id, image, title, github, liveDemo }) => (
          <article
            key={id}
            className="bg-bg p-5 rounded-[2rem] border border-transparent transition-all duration-[400ms] hover:border-bg-variant hover:bg-transparent"
          >
            <div className="rounded-[1.5rem] overflow-hidden mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={title} className="w-full" />
            </div>
            <h3 className="mb-5 text-base">{title}</h3>
            <div className="flex gap-4 mb-4">
              <a
                href={github}
                className="btn text-sm px-4 py-2"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={liveDemo}
                className="btn btn-primary text-sm px-4 py-2"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
