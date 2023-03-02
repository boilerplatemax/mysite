import React from "react";
import bartender from "../images/pocketbartender.png";
import reactteacher from "../images/reactteacher.png";
type ProjectProps = {
    id: number;
    title: string;
    description: string;
    githubLink: string;
    moreLink: string;
    demoLink: string;
    image: string;
  }
  
  function Project({ id, title, description, githubLink, moreLink, demoLink, image }: ProjectProps) {
  
  return (
    <div className="lg:mt-0 mt-48">
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-4 mx-12 xl:mx-48 mb-48"
        >

          <div className={`col-span-3 flex flex-col ${id%2===0?'order-2':'oder-1'}`}>
            <div className="flex flex-col space-y-2">
              <h3 className="text-3xl text-bold">{title}</h3>
              <p className="text-lg text-zinc-500 py-2">{description}</p>
              <div className="flex flex-row space-x-2 hidden lg:block">
                <button className="bg-zinc-200 rounded-full text-zinc-500 py-2 px-4 grow-on-hover hover:bg-zinc-300">
                  <a href={githubLink} rel="noreferrer" target="_blank">
                    Github
                  </a>
                </button>
                <button className="bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200">
                  <a href={moreLink} rel="noreferrer" target="_blank">
                    More Info
                  </a>
                </button>
                <button className="bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200">
                  <a href={demoLink} rel="noreferrer" target="_blank">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={`col-span-3 flex flex-col ${id%2===0?'order-1':'oder-2'}`}>
            <div className="">
              <a href={demoLink} rel="noreferrer" target="_blank">
                <img
                  src={(`../images/${image}.png`)}
                  alt="Profile"
                  className="rounded-md grow-on-hover shadow-md"
                />
              </a>
            </div>
            <div className="flex flex-row space-x-2 lg:hidden py-6">
              <button className="bg-zinc-500 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-zinc-300">
                <a href={githubLink} rel="noreferrer" target="_blank">
                  Github
                </a>
              </button>
              <button className="bg-blue-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-blue-200">
                <a href={moreLink} rel="noreferrer" target="_blank">
                  More Info
                </a>
              </button>
              <button className="bg-purple-400 rounded-full text-white py-2 px-4 grow-on-hover hover:bg-purple-200">
                <a href={demoLink} rel="noreferrer" target="_blank">
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Project;
