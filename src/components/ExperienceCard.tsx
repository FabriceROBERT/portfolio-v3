
import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../../../../portfolio-v2/sanity';
// import { Experience } from '../../../typings'
// import { urlFor } from '../../../sanity';
// import experience from '../../../sanity/y/schemas/experience';

type Props = {
  // experience: Experience;
}

// export default function ExperienceCard({experience}: Props) {
export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col mt-20 rounded-lg items-center space-y-5 duration-200 overflow-hidden flex-shrink-0 h-[700px] w-[900px] md:w-[600px] 
      xl:w-[900px] cursor-pointer transition-opacity snap-center overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 bg-[#292929] hover:opacity-100 p-0 md:p-10 opacity-40'>
         <motion.img initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1.2 }}
        transition={{ duration: 3, y: 0 }}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover mb-20'
        // src={urlFor(experience?.companyImage).url()}
      src='https://www6.inrae.fr/var/internet6_national_saps_paris/storage/images/qui-sommes-nous/laboratoires-et-unites-membres/laboratoires/laboratoire-des-courses-hippiques-gie-lch/45821-2-fre-FR/Laboratoire-des-Courses-Hippiques-GIE-LCH_inra_image.jpg' 
      />
      
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4l pt-10 sm:pt-10 font-light uppercase'> Developpeur Informatique</h4>
        <p className='font-bold text-2xl mt-1 '>Laboratoire des Centres Hippiques</p>
        <div className='flex space-x-2 my-2'>

          {/* {experience.technologies.map(technology => (
            <img
              key={technology._id}
              className='h-20 w-20 rounded-full'
              src={urlFor(technology.image).url()}
            
            />
          ))} */}
          
          <img className='h-20 w-20 rounded-ful' src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo-500x313.png" alt="" />
          <img className='h-20 w-20 rounded-ful' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="" />
          <img className='h-20 w-20 rounded-ful' src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo-500x313.png" alt="" />
          {/* Techs */}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {/* {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere? "Actuellement" : new Date(experience.dateEnded).toDateString()} */}
          Debut - Fin
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg h-80 w-4/5 '>
          {/* {experience.points.map((point, i) => (
            <li key={1}>{point}</li>
          ))} */}
          <li>
            Summary Point Summary Point Summary Point Summary
          </li>
          <li>
            Summary Point Summary Point Summary Point Summary
          </li>
          <li>
            Summary Point Summary Point Summary Point Summary
          </li>
        </ul>
    </div>
    </article>
  )
}