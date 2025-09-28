// useFlash.tsx
import { useState } from "react";

type Flash = { id: number; x: number; y: number };

export function useFlash() {
  const [flashes, setFlashes] = useState<Flash[]>([]);
  const [spell, setSpell] = useState("✨")

  const triggerFlash = (x: number, y: number, icon?: string) => {
    const id = Date.now();
    setSpell(icon || "✨")
    setFlashes((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setFlashes((prev) => prev.filter((f) => f.id !== id));
    }, 300);
  };

  const FlashOverlay = () => (
    <>
      {flashes.map((f) => (
        <div
          key={f.id}
          style={{
            position: "fixed",
            top: f.y,
            left: f.x,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(255,255,0,0.8)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            animation: "flashAnim 600ms ease-out forwards",
          }}
        >
          {spell}
        </div>
      ))}
    </>
  );

  return { triggerFlash, flashes, FlashOverlay };
}