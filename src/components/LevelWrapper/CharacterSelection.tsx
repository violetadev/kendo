import React from "react";
import CharacterPicker from "../CharacterPicker";
import { Background } from "../Background";
import { Typography } from "@progress/kendo-react-common";
import { StackLayout } from "@progress/kendo-react-layout";

export const CharacterSelection: React.FC = () => {
  return (
    <Background timeOfDayProp="morning">
      <StackLayout orientation="vertical" style={{ marginTop: 20 }}>
        <Typography.h1>Who are you?</Typography.h1>
        <CharacterPicker />
      </StackLayout>
    </Background>
  );
}; 
