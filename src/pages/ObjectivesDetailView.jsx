import React from 'react'
import { CheckCircle, Clock, XCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

//Mock Data
import { mockObjectives } from '../assets/data'

const getStatusIcon = (status) => {
    switch (status) {
        case "Completed":
            return <CheckCircle className='text-emerald-400' />
        case "In Progress":
            return <CheckCircle className='text-amber-400'/>
        case "Not started":
            return <XCircle className='text-rose-400'/>   
    
        default:
            return null;
    }
}


const ObjectivesDetailView = ({ onBack }) => {

    const primaryObjective = mockObjectives.find(obj => obj.id === 1)
    const otherObjective = mockObjectives.filter(obj => obj.id !== 1)
    
    const ProgressGradient = ({progress, status}) => {
        const getGradientColor = () => {
            if (status === "Completed")  return "from-emerald-400 to-emerald-600"
            if (status === "In Progress") return "from-amber-400 to-amber-600"

            return "from-rose-400 to-rose-600"
        };

        return (
            <div className="w-full bg-zinc-600 h-3 overflow-hidden">
                <div className={`bg-gradient-to-r ${getGradientColor()} h-full `} style={{width: `${progress}%`}}>

                </div>
            </div>
        )
    }



  return <div className="col-span-4 row-span-3 col p-4 text-zinc-50 shadow-2xl h-full relative">
    {/* BG Pattern */}
    <div className="absolute inset-0 bg-[url(/pat1.svg)] blur-xs -z-10"/>

    {/* Section Header  */}
    <SectionHeader onBack={onBack} title='Club Objectives'/>

    {/* Main Content Area */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow overflow-y-auto custom-scrollbar">
        {/* Main Objective Card */}

        {
            primaryObjective && (
                <div className='lg:col-span-2 overflow-hidden transform transition-all h-[420px] duration-300'>

                    {/* Image */}
                    <div  style={{

                        backgroundImage: `url(${primaryObjective.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }} className="relative h-88">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"/>

                        {/* Text */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="font-[Bebas_Neue] text-5xl tracking-wide text-zinc-50 drop-shadow-lg">
                                {primaryObjective.title}
                            </h4>
                            <p className="text-zinc-200 mt-1">
                                {primaryObjective.description}
                            </p>

                            <div className="centered-row mt-2">
                                <span className='font-semibold mr-2'>Status:</span>
                                <div className="flex items-center text-sm font-semibold">
                                    {getStatusIcon(primaryObjective.status)}
                                    <span className='ml-1 text-zinc-200'>
                                        {primaryObjective.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ProgressBar */}
                    <div className="p-4 bg-gray-950">
                        <ProgressGradient progress={primaryObjective.progress} status={primaryObjective.status}/>

                        <div className="flex justify-between text-xs mt-2 text-zinc-400">
                            <span>Progress: {primaryObjective.progress}%</span>
                            <span>Target: {primaryObjective.target}%</span>
                        </div>
                    </div>

                </div>
            )
        }

        {/* Other Objectives List */}
        <div className="lg:col-span-1 hide-scrollbar cursor-pointer h-[420px] overflow-scroll flex-col space-y-2">

            {
                otherObjective.map((obj) => (
                    <div key={obj.id} className="group bg-gray-900 hover:bg-zinc-100 p-2 centered-row space-x-4 transition-all hover:scale-[1.03] duration-300">
                        {/* Image */}
                        <div className="flex-shrink-0">
                            <img src={obj.image} alt={obj.title} className='w-20 h-20 object-cover' />
                        </div>

                        {/* Text */}
                        <div className="flex-grow">
                            <h5 className='tracking-wider font-[Bebas_Neue] text-xl group-hover:text-zinc-900 text-lime-300'>
                                {obj.title}
                            </h5>
                                <p className="text-zinc-400 group-hover:text-zinc-600 text-xs mt-1">
                                    {obj.description}
                                </p>
                                <div className="flex items-center justify-center text-sm mt-2">
                                    <div className=" flex items-center">
                                        {getStatusIcon(obj.status)}
                                        <span className='ml-1 text-zinc-300 group-hover:text-zinc-500'>
                                            {obj.status}
                                        </span>
                                    </div>

                                    <span className='text-zinc-400 font-medium'>
                                        {obj.progress}%
                                    </span>


                                </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>

  </div>
}

export default ObjectivesDetailView