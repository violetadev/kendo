import React, { useState } from "react";
import './Level1Fight.styles.scss';
import { Background } from "../../Background";
import { MAIN_FIGHT_DIALOG, NPC_FIGHT_DIALOG } from "../../../levels/levelOne";
import { useCharacterContext } from "../../../context/CharacterContext";
import { CHARACTERS, NPCS } from "../../../common/commonConstants";
import { StackLayout } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Character } from "../../Character";
import { Monster } from "../../Obstacles/Monster";
import { useDialog } from "../../../common/useDialog";

export const LevelOneFight: React.FC = () => {
  const { characterId, username, setLevel } = useCharacterContext();
  const [phase, setPhase] = useState<"before" | "after">("before");
  const [isDefeated, setIsDefeated] = useState(false);
  const {
    handleNext,
    isMainTurn,
    mainDone,
    npcDone,
    allDone,
    currentMain,
    currentNpc
  } = useDialog(MAIN_FIGHT_DIALOG, NPC_FIGHT_DIALOG);

  const handleDefeat = () => {
    setIsDefeated(true);
    setPhase("after")
  }

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

            {/* Masonry overlay */}
            < Monster icon="🔥" monsterImage="assets/rat.png" setIsDone={handleDefeat} />
            {isDefeated && phase === 'after' && allDone && (
              <StackLayout
                style={{ width: "100%", maxHeight: '40px', maxWidth: '80px', margin: "-40px 30%", marginBottom: 0 }}
              >
                <Button themeColor="primary" size="large" onClick={() => setLevel(prev => prev + 0.5)}>
                  Continue the journey
                </Button>
              </StackLayout>
            )}
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
