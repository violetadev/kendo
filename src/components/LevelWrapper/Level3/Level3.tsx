import React from "react";
import { NPCS, CHARACTER_TYPE, MONSTERS, OBSTACLE_TYPE, OBSTACLES } from "../../../common";
import { Clicker, Fight, Story } from "../../../Story";
import { useCharacterContext } from "../../../context/CharacterContext";

export const LevelThree: React.FC = () => {
  const { level } = useCharacterContext();
  const npc = NPCS.find(npc => npc.id === 'cindrel_2') as CHARACTER_TYPE

  const location = {
    img: 'assets/dungeon.png',
    name: "The Castle's Dungeons"
  }

  return (
    <>
      {(level === 4) && <Clicker npc={npc} location={location} nextLevel={4.1} obstacle={OBSTACLES.find(obstacle => obstacle.id === 'boulder') as OBSTACLE_TYPE} />}
      {(level === 4.1 && <Fight npc={npc} location={location} nextLevel={4.5} monster={MONSTERS.find(monster => monster.id === 'demon') as OBSTACLE_TYPE} />)}
      {(level === 4.5 && <Story npc={npc} location={location} nextLevel={5} />)}
    </>
  )
};
