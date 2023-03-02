import React,{useState} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import image from '../images/mojitomax.png';
import projects from '../assets/projects.json'
import bartender from '../images/pocketbartender.png';
import reactteacher from '../images/react-06.png';
import twiggington from '../images/twiggingtondemo.png';
import tweeter from '../images/tweeter.png';

function Portfolio() {
const [currentProject, setCurrentProject]=useState(0);
const scrollToSection = (name:string) => {
  const contactSection = document.getElementById(`${name}-section`);
  contactSection?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div className="  container mx-auto">
      <div className="py-6  mx-12 xl:mx-48 flex items-center h-screen -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className='flex items-center col-span-2'>
          <div className="col-span-1 mb-12">
            <h1 className="sm:text-5xl text-gray-600 text-4xl">Hi. I'm Max. A <span className="text-blue-400">Designer</span> and <span className="text-violet-400">Developer</span> building stunning interfaces.</h1>
            <h2 className="sm:text-xl text-gray-800 text-md py-4">
              <span>Find me on </span>
            <a href="https://www.linkedin.com/in/maxshapovalov/" rel="noreferrer" target="_blank" className="underline">
            LinkedIn
            </a>
            <span> / </span>
            <a href="https://github.com/boilerplatemax" rel="noreferrer" target="_blank" className="underline">
            Github
            </a>
            <span> or </span>
              <button  onClick={()=>scrollToSection("contact")} className="underline">send me a message</button>.
            </h2>
            <div className="py-2 max-w-xs">
          <div className="flex-row flex space-x-4">
          </div>
        </div>

            </div>
          </div>
          <div className="col-span-1">
            <img src={image} alt="Profile" className="w-full max-h-96 object-cover object-top" />
            
          </div>
        </div>
      </div>



      <div className="lg:mt-0 mt-48">
        {/* <h2 className="text-5xl text-gray-600 mb-4">Projects</h2> */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4  mx-12 xl:mx-48 mb-48" id="pocketbartender-section">
        <div className="col-span-2 flex items-center">
              <div className='flex flex-col space-y-2'>
              <h3 className="text-3xl text-bold">Pocket Bartender</h3>
              <p className="text-lg text-zinc-500 py-2">A fully responsive cocktail recipe application focused on UX complete with animations and API Calls.</p>
              <div className="flex flex-row space-x-2 hidden lg:block">
                <button className='bg-zinc-200 rounded-full text-zinc-500 py-2 px-4 grow-on-hover hover:bg-zinc-300'><a href="https://github.com/boilerplatemax/Pocket-BartenderV2" rel="noreferrer" target="_blank">Github</a></button>
                <button onClick={()=>setCurrentProject(0)}
                className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://pocketbartender.netlify.app/" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
              </div>
          </div>
          <div className="col-span-3 flex flex-col">

            <div className="">
            <a href="https://pocketbartender.netlify.app/" rel="noreferrer" target="_blank"><img src={bartender} alt="Profile" className="rounded-md grow-on-hover" /></a>
            </div>
            <div className="flex flex-row space-x-2 lg:hidden py-6">
                <button className='bg-zinc-500 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-zinc-300'><a href="https://github.com/boilerplatemax/Pocket-BartenderV2" rel="noreferrer" target="_blank">Github</a></button>
                <button onClick={()=>setCurrentProject(0)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://pocketbartender.netlify.app/" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4  mx-12 xl:mx-48  mb-48" id="reactteacher-section">
        <div className="col-span-2 flex items-center order-1 lg:order-2">
              <div>
              <h3 className="text-3xl text-bold">React Teacher</h3>
              <p className="text-lg text-zinc-500 py-2">A website for improving your React skills with interactive dailt code puzzles.</p>
              <div className="flex flex-row space-x-2 hidden lg:block">
                <button className='bg-zinc-200 rounded-full text-zinc-500 py-2 px-4 grow-on-hover hover:bg-zinc-300'><a href="https://github.com/boilerplatemax/dailyreactproblem" rel="noreferrer" target="_blank">Github</a></button>
                <button onClick={()=>setCurrentProject(1)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://reactteacher.com" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
              </div>
              
          </div>
          <div className="col-span-3 flex flex-col order-2 lg:order-1">

            <div className="">
            <a href="https://reactteacher.com" rel="noreferrer" target="_blank"><img src={reactteacher} alt="Profile" className="rounded-md grow-on-hover shadow-md" /></a>
            </div>
            <div className="flex flex-row space-x-2 lg:hidden py-6">
                <button className='bg-zinc-500 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-zinc-300'><a href="https://github.com/boilerplatemax/dailyreactproblem" rel="noreferrer" target="_blank">Github</a></button>
                <button onClick={()=>setCurrentProject(1)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://reactteacher.com" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4  mx-12 xl:mx-48 mb-48"  id="twiggington-section">
        <div className="col-span-2 flex items-center">
              <div className='flex flex-col space-y-2'>
              <h3 className="text-3xl text-bold">Twiggington Tree Care</h3>
              <p className="text-lg text-zinc-500 py-2">A freelance website focused on giving user's the best experience possible.</p>
              <div className="flex flex-row space-x-2 hidden lg:block">
                <button onClick={()=>setCurrentProject(2)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://twiggingtontreecare.com/" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
              </div>
          </div>
          <div className="col-span-3 flex flex-col">

            <div className="">
            <a href="https://twiggingtontreecare.com/" rel="noreferrer" target="_blank"><img src={twiggington} alt="Profile" className="rounded-md grow-on-hover" /></a>
            </div>
            <div className="flex flex-row space-x-2 lg:hidden py-6">
                <button onClick={()=>setCurrentProject(2)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://twiggingtontreecare.com/" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
          </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4  mx-12 xl:mx-48  mb-48"  id="tweeter-section">
        <div className="col-span-2 flex items-center order-1 lg:order-2">
              <div>
              <h3 className="text-3xl text-bold">Tweeter</h3>
              <p className="text-lg text-zinc-500 py-2">A social media clone that uses a realtime database.</p>
              <div className="flex flex-row space-x-2 hidden lg:block">
                <button className='bg-zinc-200 rounded-full text-zinc-500 py-2 px-4 grow-on-hover hover:bg-zinc-300'><a href="https://github.com/boilerplatemax/social" rel="noreferrer" target="_blank">Github</a></button>
                <button onClick={()=>setCurrentProject(3)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200' data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://max-social.herokuapp.com/home" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
              </div>
              
          </div>
          <div className="col-span-3 flex flex-col order-2 lg:order-1">

            <div className="">
            <a href="https://max-social.herokuapp.com/home" rel="noreferrer" target="_blank"><img src={tweeter} alt="Profile" className="rounded-md grow-on-hover" /></a>
            </div>
            <div className="flex flex-row space-x-2 lg:hidden py-6">
                <button className='bg-zinc-500 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-zinc-300'><a href="https://github.com/boilerplatemax/social" rel="noreferrer" target="_blank">Github</a></button>
                <button onClick={()=>setCurrentProject(3)} className='bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200'  data-modal-target="defaultModal" data-modal-toggle="defaultModal">More Info</button>
                <button className='bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200'><a href="https://max-social.herokuapp.com/home" rel="noreferrer" target="_blank">Demo</a></button>
              </div>
          </div>
        </div>
      </div>


      <div id="defaultModal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="relative w-full h-full max-w-5xl md:h-auto bg-gradient-to-b from-white to-blue-50">

        <div className="relative  rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                {projects[currentProject].title}
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-6 space-y-6">
              <h2 className="text-xl">About</h2>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {projects[currentProject].description}
                </p>
                {projects[currentProject].stack.length>0&&<>
                <h2 className="text-xl">Stack</h2>
                <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {projects[currentProject].stack.map(stack=>{
                  return(<li>{stack}</li>)
                })}
                </ul>
                </>}
                {projects[currentProject].features.length>0&&<>
                <h2 className="text-xl">Features</h2>
                <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {projects[currentProject].features.map(feature=>{
                  return(<li>{feature}</li>)
                })}
                </ul>
                </>}
                <h2 className="text-xl">Most Used Skills</h2>
                <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {projects[currentProject].skills.map(skill=>{
                  return(<li>
                    <dd className="flex items-center mb-3">
                      <span className="w-32">{skill.name}</span>
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width:skill.percent}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.percent}</span>
            </dd>
                  </li>)
                })}
                </ul>
                
            </div>

            
        </div>
    </div>
</div>

    </div>
    
  );
}

export default Portfolio;
