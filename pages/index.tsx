import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  
  return (
    <div  className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-300/40 scrollbar-thumb-[#ed714f]'>
      <Head>
        <title className='text-red-600 text-bold'>StudioV</title>
        <meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
  <Header socials={socials} />
  
  <section id='hero' className='snap-start'>
    <Hero pageInfo={pageInfo}/> 
  </section>

  <section  id='about' className='snap-center'>
    <About pageInfo={pageInfo}/>
  </section>
  
  <section  id='experience' className='snap-center'>
    <WorkExperience experiences={experiences}/>
  </section>

  <section  id='skills' className='snap-start'>
    <Skills skills={skills}/>
  </section>

  <section  id='projects' className='snap-start'>
    <Projects projects={projects} />
  </section>

  <section  id='contactme' className='snap-start'>
    <ContactMe />
  </section>

<Link href='#hero'>
<footer className='sticky w-full cursor-pointer bottom-5'>
<div className="flex items-center justify-center">
  <picture>
  <img 
      className="rounded-full cursor-pointer h-11 w-11 filter grayscale hover:grayscale-0"
      src="https://cdn.pixabay.com/photo/2013/07/12/12/37/letter-146016__480.png"
      alt="letter V for Vania"/>
  </picture>
  </div>     
</footer>
</Link>
</div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next will attempt to re-generate the page whe request comes in
  revalidate: 10,
  }
}