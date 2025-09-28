import * as React from "react";
import { Toolbar, ButtonGroup, Button } from "@progress/kendo-react-buttons";
import { CHARACTER_TYPE, CHARACTERS } from '../../common/';

const CharacterPickerToolbar = ({ selected, setSelected }: { selected: string, setSelected: (selected: string) => void }) => {
  return (
    <Toolbar>
      <ButtonGroup>
        {CHARACTERS.map((option: CHARACTER_TYPE) => (
          <Button
            key={option.id}
            togglable={true}
            selected={selected === option.id}
            onClick={() => setSelected(option.id)}
          >
            {option.name}
          </Button>
        ))}
      </ButtonGroup>
    </Toolbar>
  );
};

export default CharacterPickerToolbar;