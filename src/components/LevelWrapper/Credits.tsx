import React from "react";
import { useCharacterContext } from "../../context/CharacterContext";
import { CHARACTERS, NPCS } from "../../common/";
import { Background } from "../Background";
import { Typography } from "@progress/kendo-react-common";
import { StackLayout } from "@progress/kendo-react-layout";

const Credits: React.FC = () => {
  const { characterId, username } = useCharacterContext();
  const characterSelected = CHARACTERS.find(c => c.id === characterId);

  return (
    <Background timeOfDayProp="nighttime">
      <div style={{ display: "grid", gap: 12, maxWidth: 400, placeItems: "center", margin: "0 auto" }}>
        <StackLayout orientation="vertical" gap={12} align={{ horizontal: "center", vertical: "center" }}>
          <img
            src={characterSelected?.image || NPCS.find(n => n.id === "cindrel_2")?.image}
            alt={characterSelected?.name || "friend"}
            width={400}
            height={400}
            style={{ borderRadius: 8 }}
          />
          <Typography.h1 style={{ fontFamily: "'Macondo Swash Caps', cursive", fontSize: 48, margin: 0 }}>
            Thank you {username}, for playing!
          </Typography.h1>
          <Typography.p>
            I have built this with ❤️ using React and <a target="_blank" href="https://www.telerik.com/kendo-react-ui/components/introduction"> KendoReact</a>.
          </Typography.p>
          <Typography.p>
            Visit my <a target="_blank" href="https://dev.to/violetadev">Dev.to profile</a>.
          </Typography.p>
        </StackLayout>
      </div>
    </Background>
  );
};

export default Credits;
