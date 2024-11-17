import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: 'Co-Founder',
      company: 'Flabs',
      duration: 'Jan 2023 - Present',
      description: 'Leading the product development of next-gen software for diagnostic labs.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Placement Manager',
      company: 'IIT Roorkee',
      duration: 'May 2022 - Apr 2023',
      description: 'Managed placement activities at IIT Roorkee.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tech Head',
      company: 'Thomso, IIT Roorkee',
      duration: 'Jun 2022 - Nov 2022',
      description: 'Led technical aspects of IIT Roorkee\'s cultural festival.',
      gradient: 'from-pink-500 to-blue-500'
    },
    {
      title: 'Software Developer (Intern)',
      company: 'DevGap',
      duration: 'Aug 2021 - Oct 2021',
      description: 'Built 88 interactive applications for the Prime Minister Museum using React JS, Electron JS, and Django.',
      gradient: 'from-blue-500 to-purple-500'
    },
  ];

  return (
    <section className="px-2 md:px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Professional Journey
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.title}
            {...exp}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;