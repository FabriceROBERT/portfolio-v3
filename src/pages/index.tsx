'use client'
import React from "react";
import Link from "next/link";

import { GetServerSideProps, GetStaticProps } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchExperience } from "../../utils/fetchExperiences";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchProject } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocial } from "../../utils/fetchSocials";



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <title>ROBERT Fabrice Portfolio</title>
     
      {/* Header  */}

      <Header socials={socials}/>
      
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
    
      {/* // About */}
      <section id="about" className="snap-center pb-20">
        <About pageInfo={pageInfo} />
      </section>

      {/* // Experiences */}

      <section id="experience" className="snap-center">
        <Experiences experiences={experiences} />
      </section>

      {/* // Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
   

      {/* // Pojects */}
      <section id="projets" className="snap-start">
        
        <Projects projects={projects} />

      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      
      <Link href="#hero">
        <footer className=" sticky bottom-14 filter rounded-full ">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className=" -z-40 h-10 w-10 grayscale hover:grayscale-0 text-slate-500 cursor-pointer" /> 

          </div>
        
        </footer>
      </Link>
      

 
    </div>
  );
};


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();
  
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  } 
}


export default Home;