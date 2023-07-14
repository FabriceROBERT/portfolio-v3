
import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../sanity';
import { Experience } from '../../typings';



type Props = {
  experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col mt-20 rounded-lg items-center space-y-5 duration-200 overflow-hidden flex-shrink-0 h-[700px] w-[900px] md:w-[600px] 
      xl:w-[900px] cursor-pointer transition-opacity snap-center overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 bg-[#292929] hover:opacity-100 p-0 md:p-10 opacity-40'>
         <motion.img initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1.2 }}
        transition={{ duration: 3, y: 0 }}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover mb-20'
        src={urlFor(experience?.companyImage).url()}
      />
      
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4l pt-10 sm:pt-10 font-light uppercase'> {experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1 uppercase '>{experience.company}</p>
        <div className='flex space-x-2 my-2'>

          {experience.technologies?.map(technology => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
            
            />
          ))}
        
          {/* Techs */}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toLocaleDateString()} - {experience.isCurrentlyWorkingHere? "Actuellement" : new Date(experience.dateEnded).toLocaleDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg h-80 w-4/5 '>
          {experience.points.map((point, i) => (
            <li key={1}>{point}</li>
          ))}
         
        </ul>
    </div>
    </article>
  )
}