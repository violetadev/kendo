import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useCharacterContext } from "../../context/CharacterContext";
import CharacterPickerToolbar from "./CharacterPickerToolbar";
import { Accent, CHARACTER_TYPE, CHARACTERS } from "../../common/";
import { UsernameInput } from "../UsernameInput";
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Typography } from "@progress/kendo-react-common";

const CharacterPicker: React.FC = () => {
  const { setCharacterId, setLevel } = useCharacterContext();
  const [visibleDialog, setVisibleDialog] = React.useState<boolean>(false);
  const [characterSelected, setCharacterSelected] = useState<CHARACTER_TYPE>({
    ...CHARACTERS[0],
    accent: CHARACTERS[0].accent as Accent
  });

  const handleItemClick = (item: string) => {
    const found = CHARACTERS.find(character => character.id === item) || CHARACTERS[0];
    setCharacterSelected({
      ...found,
      accent: found.accent as Accent
    });
  };

  const handleSave = () => {
    setCharacterId(characterSelected.id);
    setLevel(1)
    toggleDialog()
  };

  const toggleDialog = () => {
    setVisibleDialog(!visibleDialog);
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
      {visibleDialog && (
        <Dialog onClose={toggleDialog}>
          <Typography.p style={{ margin: '25px', textAlign: 'center' }}>What is your name?</Typography.p>
          <DialogActionsBar>
            <UsernameInput defaultValue={characterSelected.name} />
            <Button type="button" onClick={handleSave}>
              Save
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}
      <Button themeColor="primary" disabled={!characterSelected} onClick={toggleDialog}>
        Continue
      </Button>
    </div>
  );
};

export default CharacterPicker;
