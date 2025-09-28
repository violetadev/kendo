import React from "react";
import { NPCS, CHARACTER_TYPE } from "../../../common";
import { Story } from "../../../Story";

export const LevelFour: React.FC = () => {
  const npc = NPCS.find(npc => npc.id === 'wizard_happy')

  const location = {
    img: 'assets/office.png',
    name: 'The Office'
  }

  return (
    <Story npc={npc as CHARACTER_TYPE} location={location} nextLevel={6} />
  )
};
