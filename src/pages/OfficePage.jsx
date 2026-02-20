import React from "react";
import MainGrid from "../components/MainGrid";

const OfficePage = () => {
  return (
    <MainGrid>
      {/* Ultimate Team */}
      <div className="group col-span-1 row-span-3 flex p-5 bg-gray-900 card-hover hover:bg-sky-600">
        <h2 className="text-[44px]/11 font-[Bebas_Neue] text-lime-300 group-hover:text-sky-200">
          DREAM <br /> TEAM <sup>TM</sup>
        </h2>
      </div>

      {/* Kick off */}
      <div className="group col-span-1 row-span-3 flex p-5 bg-gray-900 card-hover hover:bg-rose-600">
        <h2 className="text-[44px]/11 font-[Bebas_Neue] text-lime-300 group-hover:text-gray-900">
          TOSS & PLAY
        </h2>
      </div>

      {/* Iconic */}
      <div className="group col-span-2 row-span-2 flex p-5 bg-gray-900 card-hover hover:bg-amber-400">
        <h2 className="text-[44px]/8 font-[Bebas_Neue] text-lime-300 group-hover:text-zinc-900">
          CLASSIC INNINGS
        </h2>
      </div>

      {/* Help */}

      <div className="group col-span-2 row-span-1 p-5 bg-gray-900 col gap-2 card-hover hover:bg-emerald-400">
        <h2 className="text-[44px]/8 font-[Bebas_Neue] text-lime-300 group-hover:text-zinc-800">
          GAME GUIDE
        </h2>

        <p className="text-zinc-300 group-hover:text-zinc-600">
          Read match guides and gameplay tips at <br />
          support.t20nationscup.com or visit our community forums.
        </p>
      </div>
    </MainGrid>
  );
};

export default OfficePage;
