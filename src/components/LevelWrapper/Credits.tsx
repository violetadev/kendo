import React, { useEffect, useState } from "react";
import { useCharacterContext } from "../../context/CharacterContext";
import { CHARACTERS, NPCS } from "../../common/";
import { Background } from "../Background";
import { Typography } from "@progress/kendo-react-common";
import { StackLayout } from "@progress/kendo-react-layout";
import { Notification } from '@progress/kendo-react-notification';
import { Fade } from "@progress/kendo-react-animation";

const Credits: React.FC = () => {
  const { characterId, username, fights } = useCharacterContext();
  const characterSelected = CHARACTERS.find(c => c.id === characterId);
  const [showNotification, setShowNotification] = useState(false);


  useEffect(() => {
    setShowNotification(true);
  }, [])

  return (
    <Background timeOfDayProp="nighttime">

      <div style={{ display: "grid", gap: 12, maxWidth: 400, placeItems: "center", margin: "0 auto" }}>
        <StackLayout orientation="vertical" gap={12} align={{ horizontal: "center" }}>
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
          <Typography.h3 style={{ fontFamily: "'Macondo Swash Caps', cursive", margin: 0, color: "#fff" }}>
            You defeated all the monsters in {fights.reduce((sum, f) => sum + f.time, 0)} seconds!
          </Typography.h3>
          <Typography.p>
            I have built this with ❤️ using React and <a rel="noreferrer" target="_blank" href="https://www.telerik.com/kendo-react-ui/components/introduction"> KendoReact</a>.
          </Typography.p>
          <Fade>
            {showNotification && <Notification
              type={{ style: 'info', icon: false }}
              closable={true}
              onClose={() => setShowNotification(false)}
              style={{ right: 10, position: 'fixed', bottom: 20, maxWidth: 400 }}
            >
              <Typography.p>
                Congrats on completing the game! Visit my <a rel="noreferrer" target="_blank" href="https://dev.to/violetadev">Dev.to profile</a> to see what I'm up to!
              </Typography.p>
            </Notification>}
          </Fade>
        </StackLayout>
      </div>
    </Background>
  );
};

export default Credits;
