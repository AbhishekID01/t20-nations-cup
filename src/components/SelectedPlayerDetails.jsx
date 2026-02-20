import React from "react";
import { Search } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const SelectedPlayerDetails = ({ selectedPlayer, radarChartData }) => {
  return (
    <div className="w-1/2 col bg-gray-900/80 px-2">
      {/* Player Header Info */}
      <div className="pt-1 border-b border-b-zinc-600/80 relative centered-row gap-8 mb-6">
        {/* image */}
        <div className="w-30 aspect-square">
          <div
            style={{
              backgroundImage: `url(${selectedPlayer?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
            className="w-full h-full"
          ></div>
        </div>

        {/* Names */}
        <div className="col">
          {/* Status */}
          <div className="bg-rose-800/30 text-rose-400 text-sm w-fit p-1 px-3 rounded-full centered-row mb-1 -ml-2">
            <p className="w-4 h-4 bg-rose-500 inline-block mr-1.5 rounded-full"></p>
            Updated
          </div>

          {/* Name */}
          <h4 className="font-[Bebas_Neue] text-4xl text-zinc-50 mb-1">
            {selectedPlayer ? selectedPlayer.name : "PLAYER NAME"}
          </h4>

          {/* Age */}
          <p className="text-zinc-400 text-sm mb-2">
            AGE:{" "}
            {selectedPlayer
              ? Math.floor(Math.random() * (28 - 18 + 1)) + 18
              : "N/A"}
            {/* Position */}
            {selectedPlayer ? (
              <span
                className={`${
                  ["BAT"].includes(selectedPlayer.position)
                    ? "bg-amber-800/50 text-amber-300"
                    : ""
                } ${
                  ["BOWL", "FAST", "SPIN"].includes(selectedPlayer.position)
                    ? "bg-sky-800/50 text-sky-300"
                    : ""
                } ${
                  ["AR"].includes(selectedPlayer.position)
                    ? "bg-emerald-800/50 text-emerald-300"
                    : ""
                } ${
                  ["WK"].includes(selectedPlayer.position)
                    ? "bg-rose-800/50 text-rose-300"
                    : ""
                } inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mr-2 ml-2`}
              >
                {selectedPlayer.position}
              </span>
            ) : (
              "CAM"
            )}
            {/* Nationality */}
            <span>
              {selectedPlayer && (
                <img
                  src={selectedPlayer.flagUrl}
                  alt={`${selectedPlayer.nationality} flag`}
                  className="inline-block ml-2"
                />
              )}
            </span>
          </p>
        </div>

        {/* TeamLogo */}
        <div
          style={{
            backgroundImage: `url(${selectedPlayer?.teamLogo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-20 h-20 saturate-150 rounded-full ml-auto"
        ></div>
      </div>

      {/* Player Details - Radar Charts */}
      <div className="flex-1 relative min-h-[220px]">
        {/* Radar Chart */}
        {selectedPlayer && radarChartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={radarChartData}
            >
              <PolarGrid stroke="#4a4a4a" />
              <PolarAngleAxis
                dataKey="stat"
                stroke="#e0e0e0"
                tick={{ fill: "#e0e0e0", fontSize: 12 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]} // Max value for stats (0-100)
                stroke="#4a4a4a"
                tick={{ fill: "#4a4a4a", fontSize: 10 }}
                tickCount={5} // Show 5 ticks on radius axis
              />
              <Radar
                name={selectedPlayer.name}
                dataKey="A"
                stroke="#34D399" // Emerald-400
                fill="#34D399" // Emerald-400
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-zinc-400">
            <Search size={40} className="mb-4" />

            <p className="text-xl">No Player selected.</p>

            <p className="text-sm">Select a player the left panel.</p>
          </div>
        )}

        {/* Overall Rating */}
        <div className="absolute bottom-4 w-16 h-16 bg-zinc-100 border-t-4 border-t-lime-400">
          <div className="bg-gray-800 center-item">Form</div>
          <div className="grad-text from-gray-950 to-zinc-400 font-[Bebas_Neue] text-4xl center-item">
            {selectedPlayer.rating}
          </div>
        </div>

        {/* Kit Number */}
        <div className="absolute top-4 right-4 w-16 h-16">
          <div
            className={`${
              ["BAT"].includes(selectedPlayer?.position)
                ? "bg-amber-800/50 text-amber-300"
                : ""
            } ${
              ["BOWL", "FAST", "SPIN"].includes(selectedPlayer?.position)
                ? "bg-sky-800/50 text-sky-300"
                : ""
            } ${
              ["AR"].includes(selectedPlayer?.position)
                ? "bg-emerald-800/50 text-emerald-300"
                : ""
            } ${
              ["WK"].includes(selectedPlayer?.position)
                ? "bg-rose-800/50 text-rose-300"
                : ""
            } center-item mb-2`}
          >
            {selectedPlayer?.position}
          </div>

          <div className="text-zinc-200 font-[Bebas_Neue] text-5xl center-item">
            {selectedPlayer.kitNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayerDetails;
