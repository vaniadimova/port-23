import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import Image from 'next/image'

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
  <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen max-w-full mx-auto overflow-hidden text-lft md:flex-row px10 justify-evenly"
    >
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
    </h3>
    
  <div className="z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ed714f]/80">
    {projects.map((project, i) => (
  <div key={project._id} 
  className="flex flex-col items-center justify-center flex-shrink-0 w-screen p-20 mt-20 space-y-5 snap-center md:p-44 ">
    <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(project?.image).url()}
        alt="projects"
      /> 
  
  <div className="max-w-6xl px-0 space-y-10 md:px-10">
      <h4 className="text-3xl font-semibold text-center">
        <span >
          Project {i + 1} of {projects.length}:
        </span>{" "}
        <a href={project?.linkToBuild} 
        target='_blank' rel="noreferrer"
       className="underline decoration-[#d9532e]/80" 
        >
        {project?.title}
      
        </a>
      </h4>
      
    <div className="flex items-center justify-center space-x-2">
          {project.technologies?.map((technology) => (
          
              <Image width={50} height={50} 
              className="w-5 h-5"
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt={technology.title}
            />
          
         
        ))}
      </div>
                   
    <p className="text-lg text-center md:text-left">
    {project?.summary}
    </p>
  
  </div>
</div>
))} 
</div>
       
<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
</motion.div>
  );
};

export default Projects;