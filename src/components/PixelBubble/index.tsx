import * as React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { arrowLeftIcon, arrowRightIcon } from "@progress/kendo-svg-icons";
import styles from "./pixelBubble.module.scss";
import { Typography } from "@progress/kendo-react-common";
import { Accent } from "../../common";
import { Push, PushDirection } from "@progress/kendo-react-animation";

type Props = {
  title?: string;
  accent?: Accent;
  children?: React.ReactNode;
  onNext?: () => void;
  direction: PushDirection;
};

export const PixelBubble: React.FC<Props> = ({
  title = "Dialog",
  accent = "purple",
  children,
  onNext,
  direction
}) => {
  return (
    <div className={`${styles.pixelWrap} ${styles[accent]}`} onClick={onNext}>
      <Push
        enter={true}
        appear={true}
        transitionEnterDuration={400}
        direction={direction}
      >
        <Card className={styles.pixelBubble}>
          <CardHeader className={styles.header}>
            <Typography.p className={styles.title}>{title}</Typography.p>
            {onNext && (
              <Button
                size="small"
                svgIcon={direction === "left" ? arrowLeftIcon : arrowRightIcon}
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
      </Push>
    </div>
  );
};
