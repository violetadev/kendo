import React, { useEffect, useState } from "react";
import { NPCS, CHARACTER_TYPE, useDialog } from "../../../common";
import { Story } from "../../../Story";

export const LevelFour: React.FC = () => {
  const { currentNpc, npcIndex } = useDialog();
  const [npc, setNpc] = useState(NPCS.find(npc => npc.id === 'cindrel2') as CHARACTER_TYPE)

  useEffect(() => {
    console.log(currentNpc, 'currentNpc')
    if ((currentNpc?.includes("and cleaned up"))) {
      setNpc(NPCS.find(npc => npc.id === 'cindrel_2') as CHARACTER_TYPE)
    } else if ((currentNpc?.includes("...Woah… Me too"))) {
      setNpc(NPCS.find(npc => npc.id === 'cindrel_3') as CHARACTER_TYPE)
    } else if (currentNpc?.includes("Meow")) {
      setNpc(NPCS.find(npc => npc.id === 'familiar') as CHARACTER_TYPE)
    } else if (currentNpc?.includes("Use your powers wisely")) {
      setNpc(NPCS.find(npc => npc.id === 'wizard') as CHARACTER_TYPE)
    } else { setNpc(NPCS.find(npc => npc.id === 'wizard_happy') as CHARACTER_TYPE) }
  }, [currentNpc, setNpc, npcIndex])

  const location = {
    img: 'assets/office.png',
    name: "Wizard's Quarters"
  }

  return (
    <Story npc={npc as CHARACTER_TYPE} location={location} nextLevel={6} />
  )
};
