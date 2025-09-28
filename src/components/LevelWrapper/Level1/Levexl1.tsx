import React from "react";
import './Level1.styles.scss';
import { Background } from "../../Background";
import { MAIN_DIALOG, NPC_DIALOG } from "../../../levels/levelOne";
import { useCharacterContext } from "../../../context/CharacterContext";
import { CHARACTERS, NPCS } from "../../../common/commonConstants";
import { StackLayout } from "@progress/kendo-react-layout";
import { Character } from "../../Character";
import { Obstacles } from "../../Obstacles";
import { useDialog } from "../../../common/useDialog";

export const LevelOne: React.FC = () => {
  const { characterId, username } = useCharacterContext();

  const {
    handleNext,
    isMainTurn,
    mainDone,
    npcDone,
    allDone,
    currentMain,
    currentNpc
  } = useDialog(MAIN_DIALOG, NPC_DIALOG);

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
            dialogText={currentMain}
            handleNext={handleNext}
            accent={"purple"}
            characterName={username}
            characterImage={CHARACTERS.find((character) => characterId === character.id)?.image || ""}
            isTurn={isMainTurn && !mainDone && !allDone}
          />
          {/* LOCATION */}
          <div style={{ position: "relative", width: 400, height: 600 }}>
            <img
              src="assets/closet.png"
              alt="Your character"
              width={400}
              height={600}
              style={{ transform: "scaleX(-1)", width: "100%", height: "100%", display: "block" }}
            />
            <Obstacles icon="" obstacleImage="assets/box.png" disabled={!mainDone && !npcDone} />
          </div>
          {/* NPC */}
          <Character
            dialogText={currentNpc}
            handleNext={handleNext}
            accent={"green"}
            characterName={NPCS.find((character) => "cindrel" === character.id)?.name || ""}
            characterImage={NPCS.find((character) => "cindrel" === character.id)?.image || ""}
            isTurn={!isMainTurn && !npcDone && !allDone}
          />
        </StackLayout>
      </StackLayout>
    </Background >
  );
};
