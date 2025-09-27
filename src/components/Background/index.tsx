import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { useGlobalContext } from "../../context/GlobalContext";

export const Background = ({ children }: { children: ReactNode }) => {
  const { timeOfDay } = useGlobalContext()
  return (
    <div className={`${styles["day-cycle"]} ${styles[timeOfDay]}`}>
      {children}
    </div>
  );
}