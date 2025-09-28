import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { useGlobalContext } from "../../context/GlobalContext";
import { Hints } from "../Hints/Hints";

export const Background = ({ children, timeOfDayProp }: { children: ReactNode, timeOfDayProp?: string }) => {
  const { timeOfDay } = useGlobalContext()
  return (
    <div className={`${styles["day-cycle"]} ${styles[timeOfDayProp || timeOfDay]}`}>
      <Hints />
      {children}
    </div>
  );
}