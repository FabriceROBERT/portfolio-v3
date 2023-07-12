'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'
import { Skill as MySkill } from '../../typings'
type Props = {
    skill: MySkill;
    directionLeft?: boolean;
}

export default function Skill({skill, directionLeft}: Props) {
  return (
      <div className='group relative flex cursor-pointer'>
          
          <motion.img
              initial={{
                  x: directionLeft ? -200 : 200,
                  opacity:0
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=' rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 
              filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'

              src={urlFor(skill?.image).url()}
             />

<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out z-0 
          group-hover:bg-[#F7AB0A] md:w-28 md:h-28 h-24 w-24 xl:w-28 xl:h-28 rounded-full'>
  <div className='flex items-center justify-center h-full'>
    {skill?.progress && (
      <p className='text-3xl font-bold text-gray-800 opacity-80'>
        {skill.progress} %
      </p>
    )}
  </div>
</div>

    </div>  
  )
}