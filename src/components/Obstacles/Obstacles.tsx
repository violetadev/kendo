import React, { useEffect, useState } from "react";
import './Obstacles.styles.scss';
import { useCharacterContext } from "../../context/CharacterContext";
import { useFlash } from "../../common/useFlash";

type ObstaclesProps = {
  obstacleImage: string;
  icon?: string;
  disabled: boolean;
  nextLevel: number;
}

export const Obstacles: React.FC<ObstaclesProps> = ({ obstacleImage, icon, disabled, nextLevel }) => {
  const { triggerFlash, FlashOverlay } = useFlash();
  const { setLevel } = useCharacterContext();
  const [shakeTicks, setShakeTicks] = useState<Record<number, number>>({});

  const [obstacles, setObstacles] = useState(
    Array.from({ length: 9 }, (_, i) => {
      const clicksRequired = Math.floor(Math.random() * 10) + 1; // 1–10
      const useSmall = clicksRequired > 5; // e.g. >5 clicks = harder = small version
      const src = useSmall
        ? obstacleImage.replace(/(\.[a-z]+)$/i, "-small$1")
        : obstacleImage;

      return {
        id: i + 1,
        label: `box ${i + 1}`,
        h: 40 + Math.floor(Math.random() * 100),
        clicksRequired,
        clicks: 0,
        src,
      };
    })
  );

  const removeObstacle = (id: number, e: React.MouseEvent) => {
    triggerFlash(e.clientX, e.clientY, icon);
    setShakeTicks(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setObstacles((prev) =>
      prev
        .map((b) =>
          b.id === id ? { ...b, clicks: b.clicks + 1 } : b
        )
        .filter(
          (b) => b.id !== id || b.clicks + 1 < b.clicksRequired
        )
    );
  }

  useEffect(() => {
    if (obstacles?.length === 0) {
      setLevel(nextLevel)
    }
  }, [obstacles, setLevel])

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
      {obstacles.map(b => (
        <div
          key={b.id}
          style={{
            display: "inline-block",
            width: "100%",
            breakInside: "avoid",
            cursor: "pointer",
            userSelect: "none",
            pointerEvents: "auto",
            justifyItems: "center"
          }}
        >
          <img
            src={b.src}
            alt="box"
            width={b.h}
            height={b.h}
            onClick={(e) => disabled ? null : removeObstacle(b.id, e)}
            className="box-img shake"
            key={`${b.id}-${shakeTicks[b.id] || 0}`}
          />
        </div>
      ))}
      <FlashOverlay />
    </div>
  );
};
