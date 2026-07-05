import { BsFillPatchCheckFill } from 'react-icons/bs';
import Reveal from './Reveal';

interface Skill {
  name: string;
  level: string;
}

const frontendSkills: Skill[] = [
  { name: 'HTML', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Capable' },
  { name: 'Tailwind', level: 'Newcomer' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Next.js', level: 'Capable' },
  { name: 'Framer Motion', level: 'Newcomer' },
];

const backendSkills: Skill[] = [
  { name: 'Node JS', level: 'Newcomer' },
  { name: 'Express', level: 'Newcomer' },
  { name: 'MongoDB', level: 'Newcomer' },
  { name: 'MySQL', level: 'Capable' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Python', level: 'Capable' },
  { name: 'REST APIs', level: 'Capable' },
  { name: 'Git', level: 'Capable' },
];

const SkillCard = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="bg-bg p-10 rounded-[2rem] border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:border-bg-variant hover:-translate-y-1 cursor-default md:p-8 md:w-4/5 md:mx-auto sm:w-full sm:p-7">
    <h3 className="text-center mb-8">{title}</h3>
    <div className="grid grid-cols-2 gap-y-8">
      {skills.map(({ name, level }) => (
        <article key={name} className="flex gap-4">
          <BsFillPatchCheckFill className="text-primary mt-[6px] shrink-0" />
          <div>
            <h4>{name}</h4>
            <small className="text-white/60">{level}</small>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="mt-32 lg:mt-44">
      <Reveal>
        <h5 className="section-subtitle">Skill I got</h5>
        <h2 className="section-title">My Experience</h2>
      </Reveal>

      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <SkillCard title="Frontend Development" skills={frontendSkills} />
        </Reveal>
        <Reveal delay={0.15}>
          <SkillCard title="Backend Development" skills={backendSkills} />
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
