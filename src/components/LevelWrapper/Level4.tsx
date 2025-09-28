import React from "react";
import CharacterPicker from "../CharacterPicker";
import { Background } from "../Background";

export const LevelFour: React.FC = () => {
  return (
    <Background timeOfDayProp="nighttime">
      <CharacterPicker />
    </Background>
  );
}; 
