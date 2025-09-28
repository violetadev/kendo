import * as React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { arrowRightIcon } from "@progress/kendo-svg-icons";
import styles from "./pixelBubble.module.scss";
import { Typography } from "@progress/kendo-react-common";
import { Accent } from "../../common";

type Props = {
  title?: string;
  accent?: Accent;
  children?: React.ReactNode;
  onNext?: () => void;
};

export const PixelBubble: React.FC<Props> = ({
  title = "Dialog",
  accent = "purple",
  children,
  onNext,
}) => {
  return (
    <div className={`${styles.pixelWrap} ${styles[accent]}`} onClick={onNext}>
      <Card className={styles.pixelBubble}>
        <CardHeader className={styles.header}>
          <Typography.p className={styles.title}>{title}</Typography.p>
          {onNext && (
            <Button
              size="small"
              svgIcon={arrowRightIcon}
              onClick={onNext}
              title="Next"
              fillMode="flat"
              themeColor="base"
              iconClass="k-icon"
            />
          )}
        </CardHeader>
        <CardBody className={styles.body}>{children}</CardBody>
      </Card>
    </div>
  );
};
