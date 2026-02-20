import React from "react";
import MainGrid from "../components/MainGrid";

const SeasonPage = () => {
  return (
    <MainGrid>
      <div className="col-span-4 row-span-3 flex items-center justify-center bg-gray-900">
        <h2 className="text-5xl font-[Bebas_Neue] text-lime-300">
            NO SEASON AVAILABLE.
        </h2>
      </div>
    </MainGrid>
  );
};

export default SeasonPage;
