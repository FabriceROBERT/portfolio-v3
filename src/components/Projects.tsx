'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../../typings';
import { urlFor } from '../../sanity';
import project from '../../sanity/schemas/project';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  projects: Project[];
}
export default function Projects({ projects }: Props) {
  const router = useRouter();
  const sortedProjects = projects.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
  
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  })
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:3}}
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto'>
          
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projets</h3>
      
      <div className='  scrollbar  relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {/* projets */}
        {projects?.map((projet,i) => (
          <div
            key={projet._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <div className='flex flex-row justify-start gap-10'>
              <motion.img 
              initial={{ opacity: 0, y:-300 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 1.2 }} 
              viewport={{once:true}}    
              height={375}
                width={666}
                src={urlFor(projet.image).url()}
              />
              <motion.img  
                initial={{ opacity: 0, y:-300 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.2 }} 
                viewport={{once:true}}    
                 height={375}
                 width={666}
                 src={urlFor(projet.image2).url()}
              />
          </div>
            <div className='space-y-4 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl text-center'>
                <span className='decoration-[#F7AB0A]/50'>Projet {i + 1} sur {projects.length}: {projet?.title}</span>
                
              </h4>
              <div className='text-center px-0 py-0 space-x-5 flex justify-center'>
                 {projet?.technologies.map((technology) => (
                <img className='h-12 w-12  rounded-full'
                  key={technology._id} width={500}
                  height={500} src={urlFor(technology.image).url()}/>
              ))}
              </div>
             
              <p  className='text-center text-lg '>
                {projet?.summary} <br /> 
                {projet?.linkToBuild && (
             <a href={projet.linkToBuild} className='uppercase tracking-wide underline ' target="_blank" rel="noopener noreferrer">
                  Visiter le projet
                 </a>
                )}   
                </p>

            </div>
              </div>
              ))}
    </div>
  
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12' />
      
   
      </motion.div>
  )
}