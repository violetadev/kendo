import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Hints } from "../Hints/Hints";
import { useCharacterContext } from "../../context/CharacterContext";

export const Background = ({ children, timeOfDayProp }: { children: ReactNode, timeOfDayProp?: string }) => {
  const { timeOfDay } = useCharacterContext();

  return (
    <div className={`${styles["day-cycle"]} ${styles[timeOfDayProp || timeOfDay || 'morning']}`}>
      <Hints />
      {children}
    </div>
  );
}