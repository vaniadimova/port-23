import React from 'react'
import Link from 'next/link'
import Image from "next/legacy/image"
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo: PageInfo 
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
          'STUDIOV',
          `Hi, my name is ${pageInfo?.name}`,
          'Welcome to',
        ],
        loop: true,
        delaySpeed: 2000

      });

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center' >
    <BackgroundCircles />
    <Image className='relative object-cover w-32 h-32 mx-auto rounded-full '
        src={urlFor(pageInfo?.heroImage).url()}
        alt='profile pic'
        width='200'
        height='200'
        objectFit='cover'
        
      />
    <div className='z-20'>
        <h2 className='text-lg uppercase text-red-400 pt-4 pb-4 tracking-[15px]'>
          Web Development & Internet Services
        </h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#e88d66' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>

          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>

          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>

          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>    
    </div>
</div>
  )
}

export default Hero