import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../../typings';

type Props = {
  experiences: Experience[];
};

export default function Experiences({ experiences }: Props) {
  // Tri des expériences par ordre décroissant de date
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = new Date(a.dateStarted);
    const dateB = new Date(b.dateEnded);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen flex relative overflow-hidden text-left md:flex-row max-w-full px-8 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">Expérience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {sortedExperiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}