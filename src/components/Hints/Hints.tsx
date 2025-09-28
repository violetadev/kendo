import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Typography } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';
import styles from './Hints.module.scss'

export const Hints = () => {
  const [visibleWindow, setVisibleWindow] = React.useState<boolean>(false);

  const toggleWindow = () => {
    setVisibleWindow(!visibleWindow);
  };

  return (
    <div>
      <Button type="button" themeColor={'primary'} onClick={toggleWindow} id="open-window" className={styles.hintButton}>
        Hints
      </Button>
      {visibleWindow && (
        <Window title={'Hints'} onClose={toggleWindow}>
          <Typography.h3>Instructions</Typography.h3>
          <Typography.p>The Wizard's familiar has vanished. Break the barriers and strike down the lurking monsters—each click brings you closer to the rescue.</Typography.p>
          <Typography.p>To move an obstacle or attack an enemy, click repeatedly until you succeed!</Typography.p>
        </Window>
      )}
    </div>
  );
}; 