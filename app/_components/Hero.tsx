import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Hero() {
  return (
    <div className='mt-24 flex flex-col items-center'>

      {/* Content */}
      <div className='max-w-4xl w-full text-center space-y-6'>
        <h1 className='text-xl md:text-5xl font-bold'>Hey, I am your personal <span className='text-primary'>AI trip planner</span></h1>
        <p className='text-lg'>Tell me what you want, and I'll handle the rest: Flights, Hotels, trip Planner - all in seconds</p>
     
      </div>

      {/* Input Box */}
      <div className="flex justify-center">
        <Textarea placeholder='Create a trip for Paris from New' 
        className='w-full max-w-md h-28 bg-transparent border rounded-md shadow-sm focus:ring-2 focus:ring-primary'
        />
      </div>

      {/* Suggestiopn list */}

      {/* Video section */}

    </div>
  )
}

export default Hero
