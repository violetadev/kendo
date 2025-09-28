import React, { useEffect, useState } from "react";
import { CHARACTER_TYPE, CHARACTERS, LEVEL, LOCATION_TYPE, OBSTACLE_TYPE } from "../common";
import { useDialog } from "../common/useDialog";
import { useCharacterContext } from "../context/CharacterContext";
import { Background } from "../components/Background";
import { StackLayout } from "@progress/kendo-react-layout";
import { Character } from "../components/Character";
import { Monster } from "../components/Obstacles/Monster";
import { Typography } from "@progress/kendo-react-common";
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from "@progress/kendo-react-buttons";

type FightProps = {
  location: LOCATION_TYPE;
  npc: CHARACTER_TYPE,
  nextLevel: LEVEL;
  monster: OBSTACLE_TYPE;
}

const getTimeLimit = (level: LEVEL) => {
  switch (level) {
    case 1.1: return 15;  // seconds
    case 2.1: return 20;
    case 3.1: return 25;
    default: return 15;
  }
};

export const Fight: React.FC<FightProps> = ({ location, npc, nextLevel, monster }) => {
  const { characterId, username, setLevel, timeOfDay, level, logFight } = useCharacterContext();
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
  const [isGameOver, setIsGameOver] = useState(false);
  const timeLimit = getTimeLimit(level);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setIsGameOver(false);
    setTimeLeft(timeLimit);
    setHasStarted(false);
  }, [timeLimit]);

  useEffect(() => {
    if (allDone && !hasStarted) {
      setHasStarted(true);
    }
  }, [allDone, hasStarted]);

  const handleDefeat = () => {
    setIsDefeated(true);
    setLevel(nextLevel)
    logFight({
      level,
      location: location.name,
      monster: (monster as any)?.name ?? (monster as any)?.id ?? String((monster as any)?.spell ?? 'monster'),
      time: timeLimit - timeLeft,
      at: Date.now(),
    });
  }

  const mainCharacter = CHARACTERS.find(c => c.id === characterId) as CHARACTER_TYPE;

  useEffect(() => {
    if (!hasStarted || isDefeated || isGameOver) return; // NEW guard
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          setIsGameOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [hasStarted, isDefeated, isGameOver]);

  const tryAgain = () => {
    setLevel(level);
    setIsGameOver(false);
    setTimeLeft(timeLimit);
  }

  const startOver = () => {
    setLevel(0);
    setIsGameOver(false);
    setTimeLeft(getTimeLimit(1.1));
  }

  return (
    <Background timeOfDayProp={timeOfDay}>
      {isGameOver && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "grid",
            placeItems: "center",
            color: "#fff",
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: 2
          }}
        >
          <Dialog title={'Make a choice'} onClose={tryAgain}>
            <p style={{ margin: '25px', textAlign: 'center' }}>Do you want to try again?</p>
            <DialogActionsBar>
              <Button type="button" onClick={tryAgain}>
                Try again!
              </Button>
              <Button type="button" onClick={startOver}>
                Start from the beginning
              </Button>
            </DialogActionsBar>
          </Dialog>
        </div>
      )}
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
            <Typography.h1 style={{ margin: "0" }}>{location.name}</Typography.h1>
            <Typography.h3 style={{ margin: "0" }}>{hasStarted ? `Time Left: ${timeLeft}` : timeLimit}</Typography.h3>
            <div style={{ position: "relative", width: 400, height: 600 }}>
              <img
                src={location.img}
                alt={location.name}
                width={400}
                height={600}
                style={{ transform: "scaleX(-1)", width: "100%", height: "100%", display: "block" }}
              />
              {!isDefeated && <Monster icon={monster.spell} monsterImage={monster.img} setIsDone={handleDefeat} disabled={!hasStarted} />}
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
