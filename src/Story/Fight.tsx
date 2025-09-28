import React, { useState } from "react";
import { CHARACTER_TYPE, CHARACTERS, LEVEL, LOCATION_TYPE, OBSTACLE_TYPE } from "../common";
import { useDialog } from "../common/useDialog";
import { useCharacterContext } from "../context/CharacterContext";
import { Background } from "../components/Background";
import { StackLayout } from "@progress/kendo-react-layout";
import { Character } from "../components/Character";
import { Monster } from "../components/Obstacles/Monster";

type FightProps = {
  location: LOCATION_TYPE;
  npc: CHARACTER_TYPE,
  nextLevel: LEVEL;
  monster: OBSTACLE_TYPE;
}

export const Fight: React.FC<FightProps> = ({ location, npc, nextLevel, monster }) => {
  const { characterId, username, setLevel } = useCharacterContext();
  const {
    handleNext,
    isMainTurn,
    mainDone,
    npcDone,
    allDone,
    currentMain,
    currentNpc
  } = useDialog();
  const [isDefeated, setIsDefeated] = useState(false);

  const handleDefeat = () => {
    setIsDefeated(true);
    setLevel(nextLevel)
  }

  const mainCharacter = CHARACTERS.find(c => c.id === characterId) as CHARACTER_TYPE;

  return (
    <Background timeOfDayProp="afternoon">
      <StackLayout
        orientation="vertical"
        gap={24}
        align={{ vertical: "top" }}
        style={{ width: "100%", padding: 24 }}
      >
        {/* Characters row */}
        <StackLayout
          orientation="horizontal"
          align={{ horizontal: "center", vertical: "middle" }}
          gap={48}
          style={{ width: "100%" }}
        >
          {/* Main character */}
          <Character
            isTurn={isMainTurn && !mainDone && !allDone}
            dialogText={currentMain}
            handleNext={handleNext}
            accent={mainCharacter.accent}
            characterName={username}
            characterImage={mainCharacter.image}
          />
          {/* LOCATION */}
          <div style={{ position: "relative", width: 400, height: 600 }}>
            <img
              src={location.img}
              alt={location.name}
              width={400}
              height={600}
              style={{ transform: "scaleX(-1)", width: "100%", height: "100%", display: "block" }}
            />
            {!isDefeated && <Monster icon={monster.spell} monsterImage={monster.img} setIsDone={handleDefeat} />}
          </div>
          {/* NPC */}
          <Character
            isTurn={!isMainTurn && !npcDone && !allDone}
            dialogText={currentNpc}
            handleNext={handleNext}
            accent={npc.accent}
            characterName={npc.name}
            characterImage={npc.image}
          />
        </StackLayout>
      </StackLayout>
    </Background >
  );
};
