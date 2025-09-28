import React, { useEffect, useState } from "react";
import { NPCS, useDialog, CHARACTER_TYPE } from "../../../common";
import { Story } from "../../../Story";
import { useCharacterContext } from "../../../context/CharacterContext";

export const Intro: React.FC = () => {
  const { currentNpc, } = useDialog();
  const { level } = useCharacterContext();
  const [npc, setNpc] = useState(NPCS.find(npc => npc.id === 'wizard'))

  const location = {
    img: 'assets/office.png',
    name: 'The Office'
  }

  useEffect(() => {
    if (level === 1.5) {
      setNpc(NPCS.find(npc => npc.id === 'cindrel'))
    }
  }, [level])

  useEffect(() => {
    if ((currentNpc?.includes("Forgive me") || currentNpc.includes("It is no ordinary creature"))) {
      setNpc(NPCS.find(npc => npc.id === 'wizard_sad'))
    }
  }, [currentNpc, setNpc])

  return (
    <Story npc={npc as CHARACTER_TYPE} location={location} nextLevel={level === 1 ? 1.5 : 2} />
  )
};
