/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { createContext } from "react";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("/");

  // 🔷 Context Values
  const contextValues = {
    activeTab,
    setActiveTab,
  };

  return (
    <GameContext.Provider value={contextValues}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
