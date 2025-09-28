import React from "react";
import { Accent, PixelBubble } from "../PixelBubble";
import { useCharacterContext } from "../../context/CharacterContext";

type CharacterProps = { dialogText: string, handleNext: () => void, accent: Accent, characterName: string, characterImage?: string, isTurn: boolean }

export const Character: React.FC<CharacterProps> = ({ dialogText, handleNext, accent, characterName, characterImage, isTurn }) => {
  const { username } = useCharacterContext()
  return (
    <div style={{ position: "relative", zIndex: '99' }}>
      <img
        src={characterImage}
        alt="Your character"
        width={400}
        height={400}
        style={{ position: 'absolute', marginLeft: characterName !== username ? '-100px' : '-340px' }}
      />
      {dialogText && isTurn && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: 12,
          }}
        >
          <PixelBubble title={characterName} accent={accent} onNext={handleNext}>
            {dialogText}
          </PixelBubble>
        </div>
      )}
    </div>
  );
};
