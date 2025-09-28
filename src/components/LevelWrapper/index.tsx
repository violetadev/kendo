import { useCharacterContext } from "../../context/CharacterContext";
import { CharacterSelection } from "./CharacterSelection";
import { Credits } from "./Credits";
import { Final } from "./Final";
import { Intro } from "./Intro";
import { LevelOne } from "./Level1";
import { LevelTwo, LevelTwoFight } from "./Level2";
import { LevelThree } from "./Level3";
import { LevelFour } from "./Level4";

export const LevelWrapper = () => {
  const { level } = useCharacterContext();
  console.log(level, 'level')
  return (
    <div>
      {level === 0 && <CharacterSelection />}
      {(level === 1 || level === 1.5) && <Intro />}
      {(level === 2 || level === 2.1 || level === 2.5) && <LevelOne />}
      {/* {level === 2.5 && <LevelOneFight />} */}
      {level === 3 && <LevelTwo />}
      {level === 3.5 && <LevelTwoFight />}
      {level === 4 && <LevelThree />}
      {/* {level === 4.5 && <LevelThree />} */}
      {/* {level === 5 && <Final />} */}
      {/* {level === 6 && <Credits />} */}
    </div>
  )
}