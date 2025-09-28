import { useState, useMemo, useEffect } from "react";
import { LEVEL } from "./commonTypes";
import { INTRO_DIALOG } from "../components/LevelWrapper/Intro/dialog";
import { LEVEL_TWO_DIALOG } from "../components/LevelWrapper/Level2/dialog";
import { LEVEL_ONE_DIALOG } from "../components/LevelWrapper/Level1/dialog";
import { LEVEL_THREE_DIALOG } from "../components/LevelWrapper/Level3/dialog";
import { useCharacterContext } from "../context/CharacterContext";

const getDialog = (level: LEVEL) => {
  switch (level) {
    case 1:
      return INTRO_DIALOG.story;
    case 1.5:
      return INTRO_DIALOG.ending;
    case 2:
      return LEVEL_ONE_DIALOG.story;
    case 2.1:
      return LEVEL_ONE_DIALOG.battle;
    case 2.5:
      return LEVEL_ONE_DIALOG.ending;
    case 3:
      return LEVEL_TWO_DIALOG.story;
    case 3.1:
      return LEVEL_TWO_DIALOG.battle;
    case 3.5:
      return LEVEL_TWO_DIALOG.ending;
    case 4:
      return LEVEL_THREE_DIALOG.story;
    case 4.1:
      return LEVEL_THREE_DIALOG.battle;
    case 4.5:
      return LEVEL_THREE_DIALOG.ending;
    // case 5: 
    // return FINAL_DIALOG
    default:
      return INTRO_DIALOG.story;
  }
}

export function useDialog() {
  const [step, setStep] = useState(0);
  const { level } = useCharacterContext();

  const dialog = getDialog(level)

  const handleNext = () => setStep((prev) => prev + 1);

  const mainStarts = dialog.mainStarts ?? true; // default true
  const isMainTurn = mainStarts ? step % 2 === 0 : step % 2 !== 0;

  const mainIndex = Math.floor(step / 2);
  const npcIndex = Math.floor((step - 1) / 2 + (mainStarts ? 0 : 1));

  const mainDone = mainIndex >= (dialog.main?.length ?? 0);
  const npcDone = npcIndex >= (dialog.npc?.length ?? 0);

  const currentMain = dialog.main?.[mainIndex] ?? "";
  const currentNpc = dialog.npc?.[npcIndex] ?? "";

  const allDone = currentNpc.includes("<<END>>") || currentMain.includes("<<END>>")
  console.log(level, dialog)
  useEffect(() => {
    setStep(0);
  }, [level, dialog]);

  return useMemo(
    () => ({
      step,
      handleNext,
      isMainTurn,
      mainIndex,
      npcIndex,
      mainDone,
      npcDone,
      allDone,
      currentMain,
      currentNpc,
    }),
    [step, isMainTurn, mainIndex, npcIndex, mainDone, npcDone, allDone, dialog]
  );
}