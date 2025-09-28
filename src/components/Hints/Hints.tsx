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
          <Typography.p>Find the Wizard's familiar. Click on the obstacles and monsters to destroy them.</Typography.p>
        </Window>
      )}
    </div>
  );
}; 