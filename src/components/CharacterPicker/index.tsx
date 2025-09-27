import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useCharacterContext } from "../../context/CharacterContext";
import CharacterPickerToolbar from "./CharacterPickerToolbar";
import { CHARACTER_TYPE, CHARACTERS } from "../../common/commonConstants";
import { UsernameInput } from "../UsernameInput";

type Character = {
  id: string;
  name: string;
  image: string;
};

type Item = Character & { selected?: boolean };

const CharacterPicker: React.FC = () => {
  const { setCharacterId, username } = useCharacterContext();
  const [characterSelected, setCharacterSelected] = useState<CHARACTER_TYPE>(CHARACTERS[0]);

  const handleItemClick = (item: string) => {
    setCharacterSelected(CHARACTERS.find(character => character.id === item) || CHARACTERS[0]);
  };

  const handleSave = () => {
    setCharacterId(characterSelected.id);
  };

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 400, placeItems: "center", margin: "0 auto" }}>
      {characterSelected && (
        <div style={{ display: "flex", gap: 12 }}>
          <img
            src={characterSelected.image}
            alt={characterSelected.name}
            width={400}
            height={400}
            style={{ borderRadius: 8 }}
          />
        </div>
      )}
      <CharacterPickerToolbar setSelected={handleItemClick} selected={characterSelected.id} />
      <UsernameInput />
      <Button themeColor="primary" disabled={!characterSelected || username.length < 2} onClick={handleSave}>
        Save character
      </Button>
    </div>
  );
};

export default CharacterPicker;
