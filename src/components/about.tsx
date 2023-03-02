import React from 'react'

export default function About() {
  return (
    <div className=" container mx-auto mb-16">
        <div className="mx-12 xl:mx-48">
        <h2 className="text-3xl py-2 text-zinc-800">About Me</h2>
        <div className="grid grid-cols-2 gap-8 text-zinc-500 text-lg">
            <h3 className="col-span-2 md:col-span-1">
            I'm a frontend developer who went to OCAD U and I love building products that are both user-friendly and drive business value. I've been in the industry for a while now, but I'm still learning every day and always striving to improve my skills.
            </h3>
            <h3 className="col-span-2 md:col-span-1">
            In my free time, I work as a freelancer on all sorts of different projects. It's great to be able to work on something new and exciting every time, and I love the challenge of taking on different types of projects.</h3>
        </div>
        </div>
    </div>
  )
}
