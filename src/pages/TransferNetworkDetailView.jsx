import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeft, Search, SearchIcon, Share2, X } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

//Mock Player Data
import { mockScoutedPlayers } from "../assets/data";
import PlayerCard from "../components/PlayerCard";
import SelectedPlayerDetails from "../components/SelectedPlayerDetails";

const TransferNetworkDetailView = ({ onBack }) => {
  const [searchTerm, setSearchTeam] = useState("");
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("recent");
  const [currentPage, setCurrentPage] = useState("second");
  const [selectedPlayer, setSelectedPlayer] = useState(mockScoutedPlayers[0]);

  //Data for Rader Chart: Transformed to Expected former
  const radarChartData = selectedPlayer?.stats
  ? [
      { stat: "Batting", A: selectedPlayer.stats.batting || 0 },
      { stat: "Bowling", A: selectedPlayer.stats.bowling || 0 },
      { stat: "Fielding", A: selectedPlayer.stats.fielding || 0 },
      { stat: "Powerplay", A: selectedPlayer.stats.powerplayImpact || 0 },
      { stat: "Death Overs", A: selectedPlayer.stats.deathOverSkill || 0 },
      { stat: "Fitness", A: selectedPlayer.stats.fitness || 0 },
    ]
  : [];


  //Filter Player Logic
  const allFilteredPlayer = mockScoutedPlayers.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.country.toLowerCase().includes(searchTerm.toLowerCase());

    //Filter by player position
    const matchesFilter =
      !activeFilter ||
      activeFilter === "recent" ||
      (activeFilter === "BAT" &&
        ["BAT", "WK", "AR"].includes(player.position)) ||
      (activeFilter === "AR (All-Rounder)" && ["BAT", "BOWL"].includes(player.position)) ||
      (activeFilter === "BOWL" &&
        ["BOWL", "FAST", "SPIN"].includes(player.position)) ||
      (activeFilter === "WK" && player.position === "WK");

    return matchesSearch && matchesFilter;
  });

  // Calculate total pages: for Pagination
  const totalPages = Math.ceil(allFilteredPlayer.length / 6);

  //Slice Filtered Players: Display only 6 per pages
  const playerToDisplay = allFilteredPlayer.slice(
    (currentPage - 1) * currentPage * 6,
  );

  // Fallback: select first player on page if current one is not on the filtered list

  useEffect(() => {
    if (
      !playerToDisplay.some((p) => p.id === selectedPlayer?.id) &&
      playerToDisplay.length > 0
    ) {
      setSelectedPlayer(playerToDisplay[0]);
    } else if (playerToDisplay.length === 0) {
      setSelectedPlayer(null);
    }
  }, [playerToDisplay, selectedPlayer]);

  //Handle pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage - 1, 1));
  };

  // Handle Filter: Button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSearchTeam("");
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setActiveFilter(e.target.value);
    setSearchTeam("");
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex flex-col h-full relative">
        {/* Pattern  */}
        <div className="absolute inset-0 bg-[url(/pat1.svg)] blur-xs -z-10" />

        {/* Section Header  */}
        <SectionHeader onBack={onBack} title="SQUAD SELECTION" />

        {/* Main Content  */}
        <div className="flex">
          {/* Left */}
          <div className="w-1/2">
            {/* Filter & Search */}
            <div className="relative mb-5">
              {/* Search Bar */}
              {isSearchBarOpen && (
                <div className="flex bg-zinc-900">
                  <div className="flex-1">
                    <input
                      value={searchTerm}
                      onChange={handleSearchChange}
                      type="text"
                      placeholder="Search Players or Clubs"
                      className="w-full p-3 pl-10 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                  </div>
                  <X
                    onClick={() => setIsSearchBarOpen(false)}
                    className="w-8 h-8 self-center mr-4 mt-1 cursor-pointer"
                  />
                </div>
              )}

              {/* Filter Btns */}

              {!isSearchBarOpen && (
                <div className="w-full pl-4 centered-row gap-4">
                  {["recent", "BAT", "AR (All-Rounder)", "BOWL", "WK"].map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleFilterClick(item)}
                      className={`w-fit px-4 py-2 cursor-pointer uppercase card-hover ${activeFilter === item ? "bg-lime-400 text-white" : "border text-zinc-200 border-emerald-500 hover:bg-emerald-800"}`}
                    >
                      {item}
                    </div>
                  ))}

                  {/* Search Bar Trigger */}
                  <div
                    onClick={() => setIsSearchBarOpen(true)}
                    className="w-fit px-4 py-2 border text-gray-800 border-emerald-500 cursor-pointer uppercase bg-emerald-500 hover:text-emerald-500 hover:bg-gray-800 card-hover ml-auto"
                  >
                    <SearchIcon />
                  </div>
                </div>
              )}
            </div>

            {/* Player Grid & Pagination */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 max-h-[300px] overflow-y-auto">
              {playerToDisplay.length > 0 ? (
                playerToDisplay.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    onSelect={(playerData) => setSelectedPlayer(playerData)}
                    isSelected={
                      selectedPlayer && selectedPlayer.id === player.id
                    }
                  />
                ))
              ) : (
                <p className="text-zinc-400 min-h-[300px] md:col-span-full text-center p-4 col justify-center items-center">
                  <Search className="w-8 h-8 text-zinc-300" />
                  No Player found.
                </p>
              )}
            </div>
          </div>

          {/* Right */}

          {/*  Selected Player Details */}
          <SelectedPlayerDetails
            selectedPlayer={selectedPlayer}
            radarChartData={radarChartData}
          />
        </div>
      </div>
    </>
  );
};

export default TransferNetworkDetailView;
