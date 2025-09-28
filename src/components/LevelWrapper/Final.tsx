import React from "react";
import CharacterPicker from "../CharacterPicker";
import { Background } from "../Background";

export const Final: React.FC = () => {
  return (
    <Background timeOfDayProp="nighttime">
      <CharacterPicker />
    </Background>
  );
}; 
