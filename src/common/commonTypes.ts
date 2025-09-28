export type CHARACTER_TYPE = {
  id: string,
  image: string, 
  name: string,
};

export type OBSTACLE_TYPE = {
  id: string,
  img: string, 
  name: string,
  spell: string,
};

export type LOCATION_TYPE = {
  img: string;
  name: string
}

export type LEVEL = number;

export type DIALOG_TYPE = {
    mainStarts: boolean;
    main: string[];
    npc: string[];
};

export type DIALOG_LEVEL_TYPE =  {
    story: DIALOG_TYPE;
    battle: DIALOG_TYPE;
    ending: DIALOG_TYPE;
}