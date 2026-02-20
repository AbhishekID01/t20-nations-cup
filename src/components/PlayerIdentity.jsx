import React from 'react'

const PlayerIdentity = ({flagUrl, name, top, left, right, bottom}) => {
  return (
    <div style={{

        position: "absolute",
        top: top ? top : null,
        left: left ? left : null,
        right: right ? right : null,
        bottom: bottom ? bottom : null,


    }} className="w-18 h-18 2xl:w-20 2xl:h-20 bg-zinc-200/80 backdrop-blur-sm">

        {/* Image & Flag */}
        <div className="bg-[url(/avatar_00.png)] bg-cover bg-center bg-no-repeat h-2/3 relative">
        
        <img src={flagUrl} alt="flag" className='absolute bottom-0 left-0'/>

        </div>

        {/* Name */}
        <div className="bg-zinc-50 h-1/3 center-item font-[poppins] text-gray-900 font-semibold text-sm">
            {name}
        </div>


    </div>
  )
}

export default PlayerIdentity