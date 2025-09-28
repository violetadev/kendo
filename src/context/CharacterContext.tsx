import React, { createContext, useContext, useState, ReactNode } from "react";

type CharacterContextType = {
  characterId: string | null;
  setCharacterId: (id: string | null) => void;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>
  username: string;
  setUsername: (name: string) => void;
  timeOfDay?: string;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characterId, setCharacterId] = useState<string | null>(null);
  const [level, setLevel] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  const getTimeOfDay = () => {
    switch (true) {
      case level < 2: return "morning";
      case level < 3: return "sunset";
      case level < 4: return "nighttime";
      default: return "afternoon";
    }
  }

  return (
    <CharacterContext.Provider value={{ characterId, setCharacterId, level, setLevel, username, setUsername, timeOfDay: getTimeOfDay() }}>
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
