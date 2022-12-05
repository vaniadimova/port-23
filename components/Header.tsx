import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between max-w-6xl p-5 mx-auto xl:items-center' >
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
      className='flex flex-row items-center '
    >  
    {/* {Social Icons} */}
    {socials?.map((social) => (
     <SocialIcon
     key={social._id}
     url={social.url}
     fgColor='lightblue'
     bgColor='transparent'

   />  
    ))}
        
</motion.div>

<Link href='#contactme'>
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
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-blue-100 cursor-pointer'
      > 
 {/* Avatar */}
 <SocialIcon
          className='cursor-pinter'
          network='email'
          fgColor=' #D3D3D3'
          bgColor='transparent'
 />
    <p className='hidden font-serif text-lg text-gray-300 uppercase md:inline-flex hover:font-sans underline decoration-[#facc6c]/60'>
          Get In Touch
    </p>
  </motion.div>
  </Link>
</header>
  )
}

export default Header
