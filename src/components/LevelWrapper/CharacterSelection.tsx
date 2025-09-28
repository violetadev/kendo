import React from "react";
import CharacterPicker from "../CharacterPicker";
import { Background } from "../Background";

export const CharacterSelection: React.FC = () => {
  return (
    <Background timeOfDayProp="morning">
      <CharacterPicker />
    </Background>
  );
}; 
