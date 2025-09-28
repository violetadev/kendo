import React from "react";
import { NPCS, CHARACTER_TYPE, MONSTERS, OBSTACLE_TYPE, OBSTACLES } from "../../../common";
import { Clicker, Fight, Story } from "../../../Story";
import { useCharacterContext } from "../../../context/CharacterContext";

export const LevelOne: React.FC = () => {
  const { level } = useCharacterContext();
  const npc = NPCS.find(npc => npc.id === 'cindrel') as CHARACTER_TYPE
  const location = {
    img: 'assets/closet.png',
    name: 'The Closet'
  }

  return (
    <>
      {(level === 2) && <Clicker npc={npc} location={location} nextLevel={2.1} obstacle={OBSTACLES.find(obstacle => obstacle.id === 'boxes') as OBSTACLE_TYPE} />}
      {(level === 2.1 && <Fight npc={npc} location={location} nextLevel={2.5} monster={MONSTERS.find(monster => monster.id === 'rat') as OBSTACLE_TYPE} />)}
      {(level === 2.5 && <Story npc={npc} location={location} nextLevel={3} />)}
    </>
  )
};
