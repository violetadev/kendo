import React, { useEffect, useState } from "react";
import './Obstacles.styles.scss';
import { useFlash } from "../../common/useFlash";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import { LEVEL } from "../../common";
import { useCharacterContext } from "../../context/CharacterContext";

type MonsterProps = {
  monsterImage: string;
  disabled: boolean;
  icon?: string;
  setIsDone: () => void;
}

const getHp = (level: LEVEL) => {
  switch (level) {
    case 1.1:
      return 10
    case 2.1:
      return 15
    case 3.1:
      return 20;
    default:
      return 10;
  }
}

export const Monster: React.FC<MonsterProps> = ({ monsterImage, icon, setIsDone, disabled }) => {
  const { triggerFlash, FlashOverlay } = useFlash();
  const { level } = useCharacterContext();
  const [jump, setJump] = useState(false);
  const [monster, setMonster] = useState(true);
  const [monsterHits, setMonsterHits] = useState(0);
  const [exploding, setExploding] = useState(false);
  const totalHitsRequired = getHp(level);
  const maxHp = totalHitsRequired * 10;
  const remainingHp = Math.max(0, maxHp - monsterHits * 10);

  const hitMonster = (e: React.MouseEvent) => {
    if (disabled) {
      return;
    }
    triggerFlash(e.clientX, e.clientY, icon);

    // Trigger jump animation
    setJump(true);
    setTimeout(() => setJump(false), 400);

    setMonsterHits((prev) => {
      const newHits = prev + 1;

      if (newHits >= totalHitsRequired) {
        // Trigger explosion instead of immediate death
        setExploding(true);

        // After explosion, remove monster and advance level
        setTimeout(() => {
          setMonster(false);
        }, 600); // match explosion animation length
      }

      return newHits;
    });
  };

  useEffect(() => {
    if (!monster) { setIsDone() };
  }, [monster, setIsDone]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 16,
        columnCount: 2,
        columnGap: 10,
        pointerEvents: "none",
        alignContent: "end",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 16,
          columnCount: 2,
          columnGap: 10,
          pointerEvents: "none",
          alignContent: "end",
        }}
      >
        <div
          onClick={(e) => hitMonster(e)}
          style={{
            display: "inline-block",
            width: "100%",
            breakInside: "avoid",
            cursor: "pointer",
            userSelect: "none",
            pointerEvents: "auto",
          }}
        >
          {!exploding && monster && (
            <img
              src={monsterImage}
              alt="monster"
              className={`monster ${jump ? "jump" : ""}`}
              width={300}
              height={300}
            />
          )}
          {exploding &&
            <div className="explosion" style={{ fontSize: "120px" }}>
              💥
            </div>
          }
          <ProgressBar
            value={remainingHp}
            min={0}
            max={maxHp}
            className="hp"
          />
        </div>
      </div>
      <FlashOverlay />
    </div>
  );
};
