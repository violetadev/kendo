import React, { createContext, useContext, useState, ReactNode } from "react";

type GlobalContextType = {
  timeOfDay: string;
  setTimeOfDay: (v: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [timeOfDay, setTimeOfDay] = useState<string>("morning");

  return (
    <GlobalContext.Provider value={{ timeOfDay, setTimeOfDay }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobalContext must be used inside GlobalProvider");
  return ctx;
};
