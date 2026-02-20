import React from "react";
import { ArrowLeft, Share2, Trophy } from "lucide-react";

const SectionHeader = ({ onBack, title, icon=false }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-zinc-100 mb-2 flex-shrink-0">
      {/* Back Btn */}

      <button onClick={onBack} className="flex items-center text-gray-900 hover:text-lime-600 cursor-pointer transition-colors duration-200">
        <ArrowLeft className=" h-6 w-6 mr-2" />
        <span className="font-[Bebas_Neue] text-xl">BACK TO HOME</span>
      </button>

      {/* Title */}
      <h3 className="font-[Bebas_Neue] text-4xl text-gray-900 centered-row gap-4">
        {icon && <Trophy className="text-gray-900 gap-4" />}
        {title}
        </h3>

      {/* Share Btn */}
      <button className="text-zinc-600 hover:text-lime-600 transition-colors duration-200">
        <Share2 className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SectionHeader;
