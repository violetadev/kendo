import React, { useEffect, useState } from "react";
import { useCharacterContext } from "../../context/CharacterContext";
import { useFlash } from "../../common/useFlash";

type MonsterProps = {
  monsterImage: string;
  icon?: string;
  setIsDone: () => void;
}

export const Monster: React.FC<MonsterProps> = ({ monsterImage, icon, setIsDone }) => {
  const { triggerFlash, FlashOverlay } = useFlash();
  const [jump, setJump] = useState(false);
  const [monster, setMonster] = useState(true);
  const [ratHits, setRatHits] = useState(0);
  const [exploding, setExploding] = useState(false);
  const totalHitsRequired = 10;

  const hitMonster = (e: React.MouseEvent) => {
    triggerFlash(e.clientX, e.clientY, icon);

    // Trigger jump animation
    setJump(true);
    setTimeout(() => setJump(false), 400);

    setRatHits((prev) => {
      const newHits = prev + 1;

      if (newHits >= totalHitsRequired) {
        // Trigger explosion instead of immediate death
        setExploding(true);

        // After explosion, remove rat and advance level
        setTimeout(() => {
          setMonster(false);
        }, 600); // match explosion animation length
      }

      return newHits;
    });
  };

  useEffect(() => {
    if (!monster) { setIsDone() };
  }, [monster]);

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
              className={`rat ${jump ? "jump" : ""}`}
              width={300}
              height={300}
            />
          )}
          {exploding && <div className="explosion" style={{ fontSize: "120px" }}>
            💥
          </div>}
        </div>
      </div>
      <FlashOverlay />
    </div>
  );
};
