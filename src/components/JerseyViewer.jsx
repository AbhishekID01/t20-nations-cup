import React from 'react'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

const JerseyViewer = ({title, src}) => {
  return (
    <div className='w-full h-full bg-gray-900 text-center flex flex-col'>

        {/* Title */}
        <h2 className="text-3xl font-[Bebas_Neue] pt-2 text-lime-300">
            {title}
        </h2>

        {/* Kits Carousel */ }
        <div className="bg-gray-950 w-full flex-1 relative center-item">

            {/* Image */}
            <img src={src} alt="jersey" className='w-40' />

            {/* Btns */}
            <div className="absolute w-full centered-row justify-between top-25 px-4">
                <ChevronLeftCircle className='text-lime-300'/>
                <ChevronRightCircle className='text-lime-300'/>
            </div>
        </div>

    </div>
  )
}

export default JerseyViewer