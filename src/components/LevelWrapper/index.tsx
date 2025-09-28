import { useCharacterContext } from "../../context/CharacterContext";
import { CharacterSelection } from "./CharacterSelection";
import { Credits } from "./Credits";
import { Final } from "./Final";
import { Intro } from "./Intro";
import { LevelOne } from "./Level1";
import { LevelTwo } from "./Level2";
import { LevelThree } from "./Level3";
import { LevelFour } from "./Level4";

export const LevelWrapper = () => {
  const { level } = useCharacterContext();

  return (
    <div>
      {level === 0 && <CharacterSelection />}
      {(level === 1 || level === 1.5) && <Intro />}
      {(level === 2 || level === 2.1 || level === 2.5) && <LevelOne />}
      {(level === 3 || level === 3.1 || level === 3.5) && <LevelTwo />}
      {(level === 4 || level === 4.1 || level === 4.5) && <LevelThree />}
      {(level === 5 || level === 5.1 || level === 5.5) && <LevelFour />}
    </div>
  )
}