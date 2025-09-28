import React, { useEffect, useState } from "react";
import { NPCS, CHARACTER_TYPE, MONSTERS, OBSTACLE_TYPE, OBSTACLES, useDialog } from "../../../common";
import { Clicker, Fight, Story } from "../../../Story";
import { useCharacterContext } from "../../../context/CharacterContext";

export const LevelTwo: React.FC = () => {
  const { level } = useCharacterContext();
  const { currentNpc } = useDialog();
  const [npc, setNpc] = useState(NPCS.find(npc => npc.id === 'cindrel') as CHARACTER_TYPE)

  const location = {
    img: 'assets/potionsworkshop.png',
    name: 'The Potions Workshop'
  }

  useEffect(() => {
    if ((currentNpc?.includes("Another one")) || (currentNpc?.includes("I am feeling"))) {
      setNpc(NPCS.find(npc => npc.id === 'cindrel_worried') as CHARACTER_TYPE)
    }
  }, [currentNpc, setNpc])

  return (
    <>
      {(level === 3) && <Clicker npc={npc} location={location} nextLevel={3.1} obstacle={OBSTACLES.find(obstacle => obstacle.id === 'potions') as OBSTACLE_TYPE} />}
      {(level === 3.1 && <Fight npc={npc} location={location} nextLevel={3.5} monster={MONSTERS.find(monster => monster.id === 'zombie') as OBSTACLE_TYPE} />)}
      {(level === 3.5 && <Story npc={npc} location={location} nextLevel={4} />)}
    </>
  )
};
