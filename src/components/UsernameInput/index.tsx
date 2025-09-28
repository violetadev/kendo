import { Input } from "@progress/kendo-react-inputs";
import { useCharacterContext } from "../../context/CharacterContext";
import { useEffect } from "react";

export const UsernameInput = ({ defaultValue }: { defaultValue: string }) => {
  const { username, setUsername, characterId } = useCharacterContext();

  useEffect(() => {
    if (!username) {
      setUsername(defaultValue);
    }
  }, [characterId, username, setUsername]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 300 }}>
      <Input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.value as string)}
      />
    </div >
  );
};
