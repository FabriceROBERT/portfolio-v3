
'use client'
import { useRouter } from "next/router";
import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../../typings';
type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const router = useRouter();
  const handleClick = () => {
    router.push("#contact");
  }; 
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}


      



        {socials && socials.length > 0 ? (
  socials.map((social) => (
    <SocialIcon
      key={social._id}
      url={social.url}
      fgColor='gray'
      bgColor='transparent'
    />
  ))
) : (
  <p>Aucune donnée sociale disponible</p>
)}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >

        
       
      <div className="inline-flex items-center" onClick={handleClick}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
           <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
           Prendre Contact
          </p>
      </div>
            </motion.div>
    </header>
  );
}
