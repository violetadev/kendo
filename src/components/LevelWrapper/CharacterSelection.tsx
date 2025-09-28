import React from "react";
import CharacterPicker from "../CharacterPicker";
import { Background } from "../Background";
import { Typography } from "@progress/kendo-react-common";
import { StackLayout } from "@progress/kendo-react-layout";
import { Loader } from "@progress/kendo-react-indicators";

export const CharacterSelection: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  });

  return (
    <Background timeOfDayProp="morning">
      <StackLayout orientation="vertical" style={{ marginTop: 20 }}>
        {isLoading ? <Loader type="converging-spinner" /> :
          <>
            <Typography.h1>Who are you?</Typography.h1>
            <CharacterPicker />
          </>
        }
      </StackLayout>
    </Background>
  );
}; 
