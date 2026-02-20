import React from "react";
import { Trophy, X } from "lucide-react";
import JerseyViewer from "../components/JerseyViewer";

const MatchSetupView = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-t from-zinc-800/50 via-gray-950 to-gray-800/50 backdrop-blur-sm bg-opacity-95">
      {/* Close Button */}
      <X
        onClick={onClose}
        className="absolute w-16 h-16 right-4 top-2 text-lime-300"
      />

      {/* Decoration Pattern */}
      <div className="absolute w-full h-40 bg-[url(/pat1.svg)] blur-xs bottom-0"></div>

      {/* Main Layout */}
      <div className="flex flex-col">
        {/* Title */}
        <div className="w-full center-item tracking-tight italic leading-50">
          <h1 className="text-[200px] font-[Bebas_Neue]  relative">
            CT25{" "}
            <sup className="text-6xl absolute top-2 -right-20 text-lime-300">
              TM
            </sup>
          </h1>
          <p className="uppercase absolute -bottom-10 font-[Bebas_Neue] text-2xl tracking-wide centered-row gap-3">
            <Trophy className="w-5 h-5" />
            CW Sports
          </p>
        </div>

        {/* Scene */}
        <div className="flex items-center justify-between h-full p-4 px-20 w-full">
          {/* Image */}
          <div className="relative">
            <img
              src="/IndianCap.png"
              alt="home-player"
              className="h-102 mirror-x z-20"
            />
            {/* Shadow */}
            <div className="bg-black h-10 w-full absolute bottom-1 -z-10 rounded-full blur-lg"></div>
          </div>

          {/* Kits */}
          <div className="relative grid grid-cols-2 bg-lime-300/20 gap-1 h-[300px] w-[700px] ">
            {/* Home */}
            <JerseyViewer title="Home" src="/IndianJersey.png"/>

            {/* Away */}
            <JerseyViewer title="Away" src="/PakJersey.png"/>

            {/* BTNS */}
            <div className="absolute -bottom-16 left-60 2xl:left-70 2xl:-bottom-20">
              <button className="p-2 cursor-pointer hover:bg-gray-950 hover:text-lime-300 card-hover px-4 -skew-x-12 bg-lime-400 font-[Bebas_Neue] text-3xl italic text-gray-950 border-x-3 border-x-gray-100 hover:shadow-xl hover:shadow-lime-400/10">
                START MATCH
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/PakCap.png"
              alt="home-player"
              className="h-102 saturate-150"
            />

            {/* Shadow */}
            <div className="bg-black h-10 w-full absolute bottom-1 -z-10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchSetupView;
