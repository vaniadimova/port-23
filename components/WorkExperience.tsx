import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[];
}

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0}} 
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
    <h3 className='absolute top-24 uppercase tracking-[20] text-gray-400 text-2xl'>
        Experience
    </h3>
    <div className="flex w-full p-10 space-x-5 overflow-x-scroll mt-32  snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ed714f]/80">
       {experiences.map(experience => (
        <ExperienceCard key={experience._id} experience={experience} />
       ))}
  </div>   
</motion.div>
  )
}

export default WorkExperience