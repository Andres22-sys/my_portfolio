import { BsCheck } from 'react-icons/bs';
import Reveal from './Reveal';

const services = [
  {
    title: 'UI/UX Design',
    items: [
      'Designing Layout',
      'Creating Visual Design',
      'Ensure Design Responsiveness',
      'Up-to-date Design Trends',
      'Wireframing & Prototyping',
      'User Research & Testing',
      'Design Systems & Style Guides',
      'Accessibility Best Practices',
    ],
  },
  {
    title: 'Web Development',
    items: [
      'Write and Test Code',
      'Maintaining Websites',
      'Learning new web tools',
      'Collaboration',
      'API Integration',
      'Performance Optimization',
      'Cross-Browser Compatibility',
      'Version Control & Deployment',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="mt-32 lg:mt-24">
      <Reveal>
        <h5 className="section-subtitle">What I Offer</h5>
        <h2 className="section-title">Services</h2>
      </Reveal>

      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {services.map(({ title, items }, index) => (
          <Reveal key={title} delay={index * 0.15}>
            <article className="bg-bg-variant rounded-b-[2rem] border border-primary h-fit transition-all duration-[400ms] hover:bg-transparent hover:border-bg-variant hover:-translate-y-1 cursor-default">
              <div className="bg-primary rounded-b-[2rem] p-8 shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
                <h3 className="text-bg text-base text-center">{title}</h3>
              </div>

              <ul className="p-8 grid grid-cols-2 gap-x-4 gap-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <BsCheck className="text-primary text-xl shrink-0 mt-[2px]" />
                    <p className="text-[0.9rem]">{item}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
