import React from 'react'
import Nav from '../components/Nav'
import { categories } from './Categories'


function Home() {
  return (
    <div className='w-full h-screen bg-slate-200'>
      <Nav />
      <div className='flex flex-wrap justify-center items-center gap-6 w-full'>
        {categories.map((category) => (
          <div key={category.id} className='flex flex-col justify-center items-center gap-2 border-green-600 rounded-lg p-2 bg-white font-semibold text-gray-600 shadow-xl hover:scale-105 transition-transform cursor-pointer'>            
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
