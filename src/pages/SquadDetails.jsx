import React from "react";
import MainGrid from "../components/MainGrid";

//Formation: 4-4-4 Basic
import { formationsDummyData, mockSubtitutes } from "../assets/data";
import PlayerIdentity from "../components/PlayerIdentity";

const SquadDetails = () => {
  return (
    // <MainGrid>
    //   {/* LEFT */}
    //   <div className="col col-span-1 row-span-3 flex bg-zinc-100/90 backdrop-blur-sm">
    //     {/* Logo */}
    //     <div className="center-item w-40 aspect-square self-center mt-4">
    //       <img src="/teams/team2.png" alt="team-logo" />
    //     </div>

    //     {/* Coach & subs */}
    //     <div className="bg-zinc-50 w-full mt-4">
    //       <p className="bg-indigo-950 font-[poppins] text-zinc-50 text-xl p-2">
    //         Bep <span className="font-semibold tracking-wide">Guardiola</span>
    //       </p>

    //       <p className="font-[poppins] bg-emerald-400 font-semibold text-indigo-950 p-1 px-3 text-lg">
    //         Subtitutes
    //       </p>

    //       {mockSubtitutes.map((item, index) => (
    //         <p
    //           key={index}
    //           className="font-[poppins] relative text-indigo-950 text-lg border-b border-b-zinc-800 p-1 px-3"
    //         >
    //           {item.firstName}{" "}
    //           <span className="font-semibold tracking-wide">
    //             {item.lastName}
    //           </span>
    //           <span className="uppercase text-zinc-500 absolute right-2">
    //             {item.position}
    //           </span>
    //         </p>
    //       ))}
    //     </div>
    //   </div>

    //   {/* CENTER */}
    //   <div className="col-span-2 row-span-3 flex p-2 center-item relative">
    //     {/* Pitch Image */}
    //     <img
    //       src="/field.jpg"
    //       alt="bg"
    //       className="z-0 pointer-events-none saturate-200"
    //     />

    //     {/* Formation Layout Data */}
    //     {formationsDummyData.basic_4_4_2.map((player) => (
    //       <PlayerIdentity key={player.id} {...player} />
    //     ))}
    //   </div>

    //   {/* RIGHT */}
    //   <div className="group relative col-span-1 row-span-3 flex p-4 bg-[url(/squad.png)] bg-cover center-item">

    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-xs z-10 hover:bg-transparent hover:backdrop-blur-none duration-700 card-hover"/>

    //   {/* Message */}
    //   <h2 className="bg-gray-900 group-hover:hidden text-3xl font-[Bebas_Neue] text-lime-300 tracking-tight leading-5.25 font-light p-4 z-20">
    //     No <br />
    //     room <br />
    //     for <br /> racism.
    //   </h2>
      
    //   </div>
    // </MainGrid>
    <MainGrid>
      <div className="col-span-4 row-span-3 flex items-center justify-center bg-gray-900">
        <h2 className="text-5xl font-[Bebas_Neue] text-lime-300">
            WORKING ON..
        </h2>
      </div>
    </MainGrid>
  );
};

export default SquadDetails;
