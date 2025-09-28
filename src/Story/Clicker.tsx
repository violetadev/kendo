import React, { useState } from "react";
import { CHARACTER_TYPE, CHARACTERS, LEVEL, LOCATION_TYPE, OBSTACLE_TYPE } from "../common";
import { useDialog } from "../common/useDialog";
import { useCharacterContext } from "../context/CharacterContext";
import { Background } from "../components/Background";
import { StackLayout } from "@progress/kendo-react-layout";
import { Character } from "../components/Character";
import { Monster } from "../components/Obstacles/Monster";
import { Obstacles } from "../components/Obstacles";
import { Typography } from "@progress/kendo-react-common";

type ClickerProps = {
  location: LOCATION_TYPE;
  npc: CHARACTER_TYPE,
  nextLevel: LEVEL;
  obstacle: OBSTACLE_TYPE;
}

export const Clicker: React.FC<ClickerProps> = ({ location, npc, nextLevel, obstacle }) => {
  const { characterId, username, timeOfDay } = useCharacterContext();
  const {
    handleNext,
    isMainTurn,
    mainDone,
    npcDone,
    allDone,
    currentMain,
    currentNpc
  } = useDialog();

  const mainCharacter = CHARACTERS.find(c => c.id === characterId) as CHARACTER_TYPE;

  return (
    <Background timeOfDayProp={timeOfDay}>
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
          <StackLayout orientation="vertical" align={{ horizontal: "center" }} gap={12}>
            <Typography.h1>{location.name}</Typography.h1>
            <div style={{ height: "42px" }} />
            <div style={{ position: "relative", width: 400, height: 600 }}>
              <img
                src={location.img}
                alt={location.name}
                width={400}
                height={600}
                style={{ transform: "scaleX(-1)" }}
              />
              <Obstacles icon={obstacle.spell} obstacleImage={obstacle.img} disabled={!allDone} nextLevel={nextLevel} />
            </div>
          </StackLayout>
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
