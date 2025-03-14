"use client"
import SkillsCard from '@/components/SkillsCard';
import NavBar from '@/components/NavBar';
import { useEffect } from 'react';
import javaLogo from '@/imgs/java.png';
import pyLogo from '@/imgs/python.png';
import webdev from '@/imgs/webdev.png';
import racketLogo from '@/imgs/racket.png';
import cLogo from '@/imgs/c.png';
import vsCode from '@/imgs/vscode.png';
import eclipse from '@/imgs/eclipse.png';
import github from '@/imgs/github.png';
import reactLogo from '@/imgs/react.png';
import nodeLogo from '@/imgs/node.png';
import tailwindLogo from '@/imgs/tailwind.png';
import openAI from '@/imgs/openAI.png';
import gemini from '@/imgs/gemini.png';
import git from '@/imgs/git.png';
import vim from '@/imgs/vim.png';
import sqlLogo from '@/imgs/sql.png';

function Profile() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      console.warn("IntersectionObserver is not supported in this environment.");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const elements = document.querySelectorAll(".hide");
    elements.forEach((el) => observer.observe(el));

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="min-w-full min-h-full">
        <NavBar />
        <div className="text-center p-[2%]">
          <h1 className='font-bold text-3xl'>Hi my name is Jocelyn!</h1>
          <h2>Welcome to my little <span className='p-1 text-white font-semibold bg-cabin hover:scale-50 transition-all'>corner</span> of the web :D</h2>
          <h2>Feel free to <span className="font-bold text-red-600 text-xl">explore</span>, <span>discover</span>, and make yourselves at <span>home</span>!</h2>
          <section className='p-[5%]'>
            <h1 className='font-semibold text-xl'>About Me 👋</h1>
            <h2>I'm currently a first year studying Computer Science at the University of Waterloo (loo loo loo 🪿)!</h2>
          </section>
        </div>
        <h1 className='font-bold text-center text-2xl p-5'>Languages</h1>
        <div className='flex px-[5%] justify-between gap-[3%] items-center'>
          <SkillsCard img={javaLogo} skillName="Java" desc="3 years" delay="0s" />
          <SkillsCard img={pyLogo} skillName="Python" desc="1 years" delay="0.2s" />
          <SkillsCard img={webdev} skillName="JavaScript" desc="1/2 years" delay="0.4s" />
          <SkillsCard img={cLogo} skillName="C" desc="2 months" delay="0.6s" />
          <SkillsCard img={racketLogo} skillName="Racket" desc="1/2 years" delay="0.8s" />
          {/* <SkillsCard img={sqlLogo} skillName="SQL" desc="1/2 years" delay="1s" /> */}
        </div>
        <h1 className='text-center font-bold text-2xl pt-14 pb-5 '>Tools</h1>
        <div className='flex px-[5%] justify-between gap-[3%] tems-center'>
          <SkillsCard img={vsCode} skillName="VsCode" desc="3 years" delay="0s" />
          <SkillsCard img={eclipse} skillName="Eclipse" desc="1 years" delay="0.2s" />
          <SkillsCard img={github} skillName="Github" desc="1/2 years" delay="0.4s" />
          <SkillsCard img={reactLogo} skillName="React" desc="3 years" delay="0.6s" />
          <SkillsCard img={nodeLogo} skillName="Mongo" desc="2 months" delay="0.8s" />
        </div>
        <br></br>
        <div className='flex px-[5%] justify-between gap-[3%] items-center'>
          <SkillsCard img={openAI} skillName="openAI API" desc="1 years" delay="0s" />
          <SkillsCard img={gemini} skillName="Gemini API" desc="1 years" delay="0.2s" />
          <SkillsCard img={tailwindLogo} skillName="Tailwind" desc="1/2 years" delay="0.4s" />
          <SkillsCard img={git} skillName="Git" desc="1 years" delay="0.6s" />
          <SkillsCard img={vim} skillName="Vim" desc="2 months" delay="0.8s" />
        </div>
        <br></br>
        <section>
          <h1 className='font-semibold text-xl'>Hobbies</h1>
          <p>Iced coffee, pingpong, badminton, crocheting!!!</p>
        </section>
      </div >
    </>
  );
}

export default Profile;