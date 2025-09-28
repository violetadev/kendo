import React from "react";
import { CHARACTER_TYPE, CHARACTERS, LEVEL, LOCATION_TYPE, NPCS } from "../common";
import { useDialog } from "../common/useDialog";
import { useCharacterContext } from "../context/CharacterContext";
import { Background } from "../components/Background";
import { StackLayout } from "@progress/kendo-react-layout";
import { Character } from "../components/Character";
import { Button } from "@progress/kendo-react-buttons";
import { Typography } from "@progress/kendo-react-common";

type StoryProps = {
  location: LOCATION_TYPE;
  npc: CHARACTER_TYPE,
  nextLevel: LEVEL;
}

export const Story: React.FC<StoryProps> = ({ location, npc, nextLevel }) => {
  const { characterId, username, level, setLevel, timeOfDay } = useCharacterContext();
  const {
    handleNext,
    isMainTurn,
    mainDone,
    npcDone,
    allDone,
    currentMain,
    currentNpcId,
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
            accent={mainCharacter.accent || 'green'}
            characterName={username}
            characterImage={mainCharacter.image}
          />
          {/* LOCATION */}
          <div>
            <Typography.h1>{location.name}</Typography.h1>
            <div style={{ height: "42px" }} />
            <img
              src={location.img}
              alt={location.name}
              width={400}
              height={600}
              style={{ transform: "scaleX(-1)" }}
            />
            {allDone && (
              <StackLayout
                style={{ width: "100%", maxHeight: '40px', maxWidth: '80px', margin: "-40px 30%", marginBottom: 0 }}
              >
                <Button themeColor="primary" size="large" onClick={() => setLevel(nextLevel)}>
                  Continue the journey
                </Button>
              </StackLayout>
            )}
          </div>
          {/* NPC */}
          <Character
            isTurn={!isMainTurn && !npcDone && !allDone}
            dialogText={currentNpc}
            handleNext={handleNext}
            accent={npc?.accent || 'green'}
            characterName={NPCS.find(n => n.id === currentNpcId)?.name ?? npc?.name}
            characterImage={NPCS.find(n => n.id === currentNpcId)?.image ?? npc?.image}
          />
        </StackLayout>
      </StackLayout>
    </Background >
  );
};
