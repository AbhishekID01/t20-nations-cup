import React from 'react'
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import BackgroundMusicPlayer from "../components/BackgroundMusicPlayer";
import { Circle, Square, X } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />

      <div className="flex flex-col relative">

        <BackgroundMusicPlayer />

        <NavBar />
        <main className="MAIN">
          {children}
        </main>

        <div className="text-2xl 2xl:text-3xl font-[Bebas_Neue] italic  tracking-wide absolute -bottom-10 centered-row gap-8">
          <p className="centered-row gap-2">
            <X className="w-8 h-8 p-0.5 bg-gray-900 rounded-full text-green-300" />
            Select
          </p>

          <p className="centered-row gap-2">
            <Square className="w-8 h-8 p-0.5 bg-gray-900 rounded-full text-orange-300" />
            Back
          </p>

          <p className="centered-row gap-2">
            <Circle className="w-8 h-8 p-0.5 bg-gray-900 rounded-full text-rose-300" />
            Subscribe
          </p>

          <p className="text-lime-300">
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Layout