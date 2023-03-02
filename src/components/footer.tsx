import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className="container mx-auto pb-16">
        <div className="mx-12 xl:mx-48">
        <h2 className="text-lg py-2 text-zinc-400">Site Designed by <span className="text-blue-500">Max Shapovalov</span> {year}.</h2>
        
        
        </div>
    </div>
  )
}
