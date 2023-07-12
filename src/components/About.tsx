'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { PageInfo } from '../../../../../portfolio-v2/typings'
import { urlFor } from '../../../../../portfolio-v2/sanity'

type Props = {
  // pageInfo: PageInfo
  
}

// export default function About({pageInfo}: Props) {
//   const [data, setData] = useState<PageInfo>(pageInfo); // définition de la variable d'état pour stocker les données récupérées
  
  

export default function About({}: Props) {
  return (
      <motion.div
          className=" flex flex-col relative text-center xl:text-left xl:flex-row h-screen md:max-w-7xl max-w-9xl px-10 justify-evenly my-20 mx-auto items-center">
          
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 3}}
        className="absolute md:top-36 top-24 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">à propos</motion.h3 >

          <motion.img
              initial={{
              x: -200,
              opacity:0,
              }}

              whileInView={{
                  opacity:1,
                  x: 0,   
              }}

              transition={{
                  duration: 1.0,
              }}

              // src={urlFor(pageInfo?.profilePic).url()}
              src="https://gifdb.com/images/high/excuse-me-blinking-meme-b575wnxukw7aiqbd.gif"
              className="my-20 mx-20 mt-80 -mb-5 md:mb-0 flex-shrink-0 w-52 h-52 sm:w-[300px] sm:h-[300px]
              rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl:w-[500px] xl:h-[600px]"/>
          
          <div className="space-y-10 py-10 md:px-0">
              
              <motion.h4
                initial={{
                    x: 200,
                    opacity:0,
                    }}
      
                    whileInView={{
                        opacity:1,
                        x: 0,   
                    }}
      
                    transition={{
                        duration: 1.0,
                    }}
                
                className="text-4xl sm:my-10 font-semibold">
                Du coup je me <span className=' animate-pulse bg-[#F7AB0A]/50'> présente</span></motion.h4>
              
              
               
              
                <motion.p
                initial={{
                y: 200,
                opacity:0,
                  }}

                whileInView={{
                opacity:1,
                y: 0,
                  
                  }}
                
                transition={{
                    duration: 1,
                  }}

          className="sm:text-base text-sm ">
          {/* {pageInfo?.backgroundInformation} */}
          
                </motion.p>
        </div>

    </motion.div>
  )
} 