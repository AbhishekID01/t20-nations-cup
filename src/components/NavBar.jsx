import { NavLink } from "react-router-dom"
import { useContext } from "react"
import {GameContext} from "../context/GameContext"

//tabs Date
import {tabsData} from "../assets/data"

const NavBar = () => {

    const {setActiveTab} = useContext(GameContext)

  return (
    <div className="w-full h-10 mt-18 2xl:mt-22">
        <div className="flex items-center gap-5 bg-zinc-50 max-w-fit">
            {
                tabsData.map((item) => (
                    <NavLink to={item.to} key={item.id} onClick={() => 
                        setActiveTab(item.name.toLowerCase())} className={({isActive}) => `uppercase font-[Bebas_Neue] text-gray-800 text-3xl hover:bg-lime-400 hover:text-zinc-800 transition-all duration-200 ease-out pt-0.5 px-5 relative ${isActive ? 'bg-gray-900 border-t-2 text-zinc-50 border-t-lime-300' : ''}`
                    }>
                        {item.name}

                        {/* Notification item */}
                        {item.notify && (
                            <div className="absolute w-5 h-5 bg-rose-600 rounded-full -top-3 right-0 border border-zinc-100 flex items-center text-zinc-50 justify-center text-sm">
                                <p className="">2</p>
                            </div>
                        )}

                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar