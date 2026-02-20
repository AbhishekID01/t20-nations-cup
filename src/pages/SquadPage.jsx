import React from 'react'
import MainGrid from '../components/MainGrid'
import CarouselCircles from '../components/CarouselCircles'
import { useState } from 'react'
import SquadDetails from './SquadDetails'

const SquadPage = () => {

    const [squadDetails, setSquadDetails] = useState(false)

    if (squadDetails) {
        return <SquadDetails />
    }


  return (
    <MainGrid>
        {/* Huge Card */}
        <div onClick={() => setSquadDetails(true)} className="group col-span-2 row-span-3 p-4 bg-gray-900 hover:bg-emerald-500 transition-all duration-200 ease-out relative">

            <p className="font-[Bebas_Neue] text-5xl text-lime-300 group-hover:text-zinc-50">TEAM INDIA</p>    
            <p className="text-zinc-300 font-medium text-2xl">
                Match XI
            </p>

            {/* Image */}
            <img src="/BattingShi2.png" alt="image" className='absolute w-20 bottom-4 left-4' />
        </div>

        {/* Small Cards */}

        {/* Club */}
        <div className="group bg-gray-900 p-5 hover:bg-amber-400 hover:text-zinc-800 transition-all duration-200 ease-out relative">
            <p className="font-[Bebas_Neue] text-4xl leading-8 text-lime-300 group-hover:text-zinc-800">
                PLAYING  <br />
                 XI
            </p>

            {/* Image */}
            <img src="/Crick.png" alt="image" className='w-28 2xl:w-40 absolute right-2 top-0'/>
        </div>

        {/* NATL */}
        <div className="group bg-gray-900 p-5 hover:bg-rose-700 transition-all duration-200 ease-out">
            <p className="font-[Bebas_Neue] text-4xl leading-8 text-lime-300 group-hover:text-zinc-50">
                WORLD CUP <br /> SQUAD
            </p>

            <p className="text-sm leading-4 mt-2 text-zinc-300 w-3/4">
            Lorem ipsum dolor sit amet.</p>
        </div>

        {/* REPORT */}
        <div className="group bg-gray-900 p-5 hover:bg-sky-500 transition-all duration-200 ease-out">
            <p className="font-[Bebas_Neue] text-4xl leading-8 text-lime-300 group-hover:text-sky-900">
                TEAM  <br /> ANALYTICS
            </p>

            <p className="text-sm leading-4 mt-2 text-zinc-300 w-3/4">
            Lorem ipsum dolor sit amet.</p>

            {/* Carousel Circle */}
            <CarouselCircles />
        </div>

        {/* SELECTION */}
        <div className="group bg-gray-900 p-5 hover:bg-emerald-500 transition-all duration-200 ease-out">
            <p className="font-[Bebas_Neue] text-4xl leading-8 text-lime-300 group-hover:text-zinc-50">
                World Cup <br /> Squad Selection
            </p>

            <p className="text-sm leading-4 mt-2 text-zinc-300 w-3/4">
            Lorem ipsum dolor sit amet.</p>
        </div>

        {/* TEAM */}
        <div className="group bg-gray-900 p-5 hover:bg-amber-400 transition-all duration-200 ease-out">
            <p className="font-[Bebas_Neue] text-4xl leading-8 text-lime-300 group-hover:text-zinc-800">
                MATCH <br /> STRATEGY
            </p>

            <p className="text-sm leading-4 mt-2 text-zinc-300 w-3/4">
            Lorem ipsum dolor sit amet.</p>
        </div>

        {/* KIT */}
        <div className="group bg-gray-900 p-5 hover:bg-amber-400 transition-all duration-200 ease-out">
            <p className="font-[Bebas_Neue] text-4xl leading-8 text-lime-300 group-hover:text-gray-900">
               Match <br /> XI
            </p>

            <p className="text-sm leading-4 mt-2 text-zinc-300 w-3/4 group-hover:text-zinc-800">
            Lorem ipsum dolor sit amet.</p>

            <CarouselCircles />
        </div>



    </MainGrid>
  )
}

export default SquadPage