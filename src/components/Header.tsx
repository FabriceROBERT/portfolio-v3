
'use client'
import React from 'react';
import { fetchSocial } from '../../../../../portfolio-v2/utils/fetchSocials';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { Social } from '../../../../../portfolio-v2/typings';
type Props = {
  // socials: Social[];
};

// export default function Header({ socials }: Props) {
export default function Header({ }: Props) {
  
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
        {/* {socials && socials.length > 0 ? (
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
)} */}
        <SocialIcon
          url='https://www.github.com/FabriceROBERT'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/fabrice-robert9536/'
          fgColor='gray'
          bgColor='transparent'
        />
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
        <Link href='#contact'>
          <SocialIcon fgColor='gray' network='email' bgColor='transparent' />
        </Link>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Prendre Contact
        </p>
      </motion.div>
    </header>
  );
}
