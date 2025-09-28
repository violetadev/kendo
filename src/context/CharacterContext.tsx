import React, { createContext, useContext, useState, ReactNode } from "react";
import { FightLog } from "../common";

type CharacterContextType = {
  characterId: string | null;
  setCharacterId: (id: string | null) => void;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>
  username: string;
  setUsername: (name: string) => void;
  timeOfDay?: string;
  fights: FightLog[];
  logFight: (entry: FightLog) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characterId, setCharacterId] = useState<string | null>(null);
  const [level, setLevel] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [fights, setFights] = useState<FightLog[]>([]);
  const logFight = (entry: FightLog) => setFights((prev) => [...prev, entry]);

  const getTimeOfDay = () => {
    switch (true) {
      case level < 3: return "morning";
      case level < 4: return "sunset";
      case level < 5: return "nighttime";
      default: return "sunset";
    }
  }

  return (
    <CharacterContext.Provider value={{ characterId, setCharacterId, level, setLevel, username, setUsername, timeOfDay: getTimeOfDay(), fights, logFight }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const ctx = useContext(CharacterContext);
  if (!ctx) {
    throw new Error("useCharacterContext must be used inside a CharacterProvider");
  }
  return ctx;
};
