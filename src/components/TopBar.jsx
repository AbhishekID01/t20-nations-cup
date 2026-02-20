import { AlertCircle, Newspaper, Share2, Shield, ShoppingCart, Users } from "lucide-react"


const TopBar = () => {
  return (
    <div className="bg-gray-900/20 backdrop-blur-xs flex items-center justify-between h-20 w-full">

        {/* Left */}
        <div className="bg-gradient-to-l via-gray-900 from-lime-500/50 to-gray-950 cursor-pointer p-4 w-[40%] h-full flex items-center gap-4 relative overflow-clip">

            {/* Logo */}
            <div className="w-16 h-16 2xl:h-18 2xl:w-18 rounded-full ">
                <img src="/teams/GameLogo.png" alt="team-logo" />
            </div>

            {/* Names */}
            <div className="col">
                <p className="text-3xl font-[Bebas_Neue]">T20 Nations Cup</p>
                <p className="-mt-1 text-zinc-300/80 ">Footprints Arts</p>

                {/* Clip Art */}
                <div className="absolute w-20 h-30 bg-[#0c1f29] -right-13 -top-2 rotate-30"></div>
            </div>
        </div>

        {/* Right */}
        <div className="bg-zinc-800 w-[40%] cursor-pointer h-full relative centered-row px-8">

            {/* Icons */}
            <div className="flex items-center justify-between min-w-4/5 mt-2">
                <Share2/> <Newspaper/> <AlertCircle/> <Users/> <ShoppingCart/>

                {/* Team Logo */}
                <div className="w-15 h-15 ml-4 bg-cover bg-center bg-[url('/teams/GameLogo.png')] rounded-full border-2 border-lime-300/50 p-2">
                </div>
            </div>

            {/* XP */}
            <div className="absolute top-0 h-5 w-fit left-0 bg-blue-900 flex items-center">
                <div className="bg-zinc-950 center-item text-amber-300 px-4">25</div>
                <p className="ml-4 pr-6">1430/7, 000</p>
            </div>

                <div className="absolute top-0 h-5 w-fit left-55 bg-zinc-900 flex items-center">
                    <div className="h-full aspect-square bg-orange-500 center-item text-zinc-800 font-semibold">!</div>
                    <p className="ml-4 pr-6">52,000</p>
                </div>

            {/* Colored */}

            <div className="absolute w-20 h-20 bg-emerald-400 center-item right-0">
                <div className="w-15 h-15 border border-zinc-800 center-item rounded-full p-2">
                    <Shield className="w-8 h-8 text-emerald-900" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default TopBar