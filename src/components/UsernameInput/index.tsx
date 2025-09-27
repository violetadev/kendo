import { Input } from "@progress/kendo-react-inputs";
import { useCharacterContext } from "../../context/CharacterContext";
import { Typography } from "@progress/kendo-react-common";

export const UsernameInput = () => {
  const { username, setUsername } = useCharacterContext();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 300 }}>
      <label htmlFor="username">
        <Typography.p>Enter your character's name</Typography.p>
      </label>
      <Input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.value as string)}
        placeholder={'My name is...'}
      />
    </div >
  );
};
