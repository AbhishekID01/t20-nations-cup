import { useState } from "react";
import CarouselCircles from "../components/CarouselCircles";
import MainGrid from "../components/MainGrid";
import NewsDetailsView from "./NewsDetailsView";
import TablesDetailView from "./TablesDetailView";
import ObjectivesDetailView from "./ObjectivesDetailView";
import TransferNetworkDetailView from "./TransferNetworkDetailView";
import MatchSetupView from "./MatchSetupView";

const CentralPage = () => {
  const [showNewsDetails, setShowNewsDetails] = useState(false);
  const [showTablesDetail, setShowTablesDetail] = useState(false);
  const [showObjectivesDetail, setShowObjectivesDetail] = useState(false);
  const [showTransferNetworkDetail, setShowTransferNetworkDetail] =
    useState(false);
  const [showMatchSetup, setShowMatchSetup] = useState(false);

  if (showNewsDetails) {
    return <NewsDetailsView onBack={() => setShowNewsDetails(false)} />;
  }

  if (showTablesDetail) {
    return <TablesDetailView onBack={() => setShowTablesDetail(false)} />;
  }

  if (showObjectivesDetail) {
    return (
      <ObjectivesDetailView onBack={() => setShowObjectivesDetail(false)} />
    );
  }

  if (showTransferNetworkDetail) {
    return (
      <TransferNetworkDetailView
        onBack={() => setShowTransferNetworkDetail(false)}
      />
    );
  }

  return (
    <MainGrid>
      {/* Match Card */}
      <div
        onClick={() => setShowMatchSetup(true)}
        className="group flex justify-between col-span-2 row-span-1 p-4 bg-gray-900 hover:bg-emerald-500 transition-all duration-200 ease-out cursor-pointer"
      >
        {/* Left */}
        <div className="LEFT">
          <p className="font-[Bebas_Neue] text-4xl 2xl:text-5xl text-lime-300 group-hover:text-zinc-800">
            PLAY MATCH
          </p>
          <p className="text-zinc-300/90 group-hover:text-zinc-100 text-lg leading-6">
            Sunday, Feb 2 2026 <br />
            India vs Pakistan
          </p>
        </div>

        {/* Right */}
        <div className="w-2/5 h-full bg-zinc-40 center-item">
          <img
            src="/BattingShil.png"
            alt="image"
            className="w-35 2xl:w-40 rotate-20"
          />
        </div>
      </div>

      {/* News Card */}
      <div
        onClick={() => setShowNewsDetails(true)}
        className="group col-span-2 row-span-1 bg-gray-900 p-5 hover:bg-zinc-50 hover:text-zinc-800 transition-all centered-row justify-between duration-200 ease-out relative cursor-pointer"
      >
        {/* Text */}
        <div className="TEXT">
          <p className="font-[Bebas_Neue] text-4xl">
            Star batsman scores{" "}
            <span className="text-amber-300 group-hover:text-cyan-400 pr-2">
              89(45)
            </span>{" "}
            in{" "}
            <span className="text-emerald-400 group-hover:text-amber-400 pr-2">
              Super 12 clash
            </span>
          </p>

          <p className="text-zinc-300/90 group-hover:text-zinc-500 text-lg leading-6">
            Group B • Friday, July 12 2024
          </p>
        </div>

        {/* Image */}
        <div className="h-full aspect-square bg-blue-900 ">
          <div className="h-full bg-[url(/ViratKohli.png)] bg-cover bg-center"></div>
        </div>

        {/* Carousel Circle */}
        <CarouselCircles />
      </div>

      {/* Global Transfer Network */}
      <div
        onClick={() => setShowTransferNetworkDetail(true)}
        className="group col-span-2 row-span-2 bg-gray-900 p-5 hover:bg-sky-400 hover:text-zinc-800 transition-all duration-200 ease-out cursor-pointer"
      >
        <div className="">
          <p className="font-[Bebas_Neue] group-hover:text-blue-900 text-4xl text-lime-300">
            SQUAD SELECTION
          </p>
          <p className="text-zinc-300/90 group-hover:text-zinc-900 text-lg leading-6">
            
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div
        onClick={() => setShowObjectivesDetail(true)}
        className="group col-span-1 row-span-2 bg-gray-900 p-5 hover:bg-amber-400  transition-all duration-200 ease-out cursor-pointer"
      >
        {/* Text */}
        <div className="">
          <p className="font-[Bebas_Neue] group-hover:text-zinc-800 text-4xl text-lime-300">
            TOURNAMENT GOALS
          </p>

          
        </div>
      </div>

      {/* Tables */}
      <div
        onClick={() => setShowTablesDetail(true)}
        className="group col-span-1 row-span-2 bg-gray-900 p-5 hover:bg-rose-400 hover:text-zinc-800 transition-all duration-200 ease-out cursor-pointer"
      >
        <p className="font-[Bebas_Neue] group-hover:text-zinc-800 text-4xl text-lime-300">
          Tables
        </p>
        <img
            src="/Cri.png"
            alt="image"
            className="w-35 2xl:w-40 absolute bottom-0 right-0"
          />
      </div>

      {/* Conditionally render Match setup Model  */}
      {showMatchSetup && (
        <MatchSetupView onClose={() => setShowMatchSetup(false)} />
      )}
    </MainGrid>
  );
};

export default CentralPage;
