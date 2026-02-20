import React from 'react'
import { Users2 } from 'lucide-react'
import MainGrid from '../components/MainGrid'

const OnlinePage = () => {
  return (
    <MainGrid>

        {/* Season */}
        <div className="group col-span-2 row-span-2 flex p-4 bg-gray-900 card-hover hover:bg-rose-400 hover:text-gray-900 col">
            <h2 className="text-5xl font-[Bebas_Neue] text-lime-300 group-hover:text-zinc-50">
                Ranked Series
            </h2>

            <p className="text-zinc-300 group-hover:text-zinc-800">
              Play head-to-online with <br /> any country and go for promotion <br /> and  trophies!
            </p>
        </div>

        {/* Pro Clubs */}
        <div className="group col-span-2 row-span-2 flex p-4 bg-gray-900 card-hover hover:bg-emerald-400 hover:text-gray-900 col">
            <h2 className="text-5xl font-[Bebas_Neue] text-lime-300 group-hover:text-zinc-50">
                Online Squad
            </h2>

            <p className="text-zinc-300 group-hover:text-zinc-800">
              Join or create a country with your  <br /> friends and play online upto 11.
            </p>
        </div>

        {/* Co-op */}
        <div className="group col-span-2 row-span-1 p-4 bg-gray-900 col card-hover hover:bg-amber-400">

          <h2 className="text-5xl font-[Bebas_Neue] text-lime-300 group-hover:text-zinc-800">
            Co-Op Series
          </h2>

          <p className="text-zinc-300 centered-row gap-3 group-hover:text-zinc-800">
            <Users2/> 4 Friends Online
          </p>
          
        </div>

        {/* Friendly */}
        <div className="group col-span-1 row-span-1 flex p-4 bg-gray-900 col card-hover hover:bg-sky-400">

          <h2 className="text-5xl font-[Bebas_Neue] text-lime-300 group-hover:text-zinc-800">
            Online <br /> Friends
          </h2>

          <p className="text-zinc-300 centered-row gap-3 group-hover:text-zinc-50">
            <Users2/> 2 Friends Online
          </p>
          
        </div>

        {/* Tournaments */}

        <div className="group col-span-1 row-span-1 p-4 bg-gray-900 col items-center justify-center card-hover hover:bg-lime-400">

          <h2 className="text-5xl font-[Bebas_Neue] text-lime-300 group-hover:text-gray-800">
            World Events
          </h2>

          <p className="text-zinc-300 centered-row gap-3 group-hover:text-zinc-50">
            TOURNAMENTS
          </p>
          
        </div>


    </MainGrid>
  )
}

export default OnlinePage