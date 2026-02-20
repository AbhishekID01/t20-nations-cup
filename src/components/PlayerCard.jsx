import React from "react";

const PlayerCard = ({ player, onSelect, isSelected }) => {
  return (
    <div
      onClick={() => onSelect(player)}
      className={`pt-2 cursor-pointer group flex gap-5 hover:bg-lime-400 transition-colors duration-200 ${isSelected ? "border-2 border-emerald-500 bg-lime-400" : "border border-zinc-500 bg-gray-900"}`}
    >
      {/* Player Image   */}
      <div className="w-24 h-24 aspect-square">
        <div
          style={{
            backgroundImage: `url(${player.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
          className="w-full h-full"
          data-testid="player-image-background"
        ></div>
      </div>

      {/*  Player Basic Info */}
      <div className="p-4">
        <h4
          className={`font-[Bebas_Neue] text-2xl mb-1 group-hover:text-gray-900 ${isSelected ? "text-gray-900" : "text-zinc-50"}`}
        >
          {player.name}
        </h4>

        <p
          className={`text-zinc-400 text-sm mb-2 group-hover:text-zinc-800 ${isSelected ? "text-gray-800" : "text-zinc-400"}`}
        >
          {player.position} | {player.country}{" "}
          <span>
            <img
              src={player.flagUrl}
              alt="player-nationality"
              className="inline-block ml-2"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
