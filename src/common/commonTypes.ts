export type CHARACTER_TYPE = {
  id: string,
  image: string, 
  name: string,
  accent: Accent,
};

export type Accent = "purple" | "grey" | "blue" | "green" | "red" | "black";

export type FightLog = { level: number; location: string; monster: string; time: number; at: number };

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

export type DialogLine = {
  id: string;
  text: string;
};

export type DIALOG_TYPE = {
  mainStarts: boolean;
  main: DialogLine[];
  npc: DialogLine[];
};

export type DIALOG_LEVEL_TYPE =  {
    story: DIALOG_TYPE;
    battle: DIALOG_TYPE;
    ending: DIALOG_TYPE;
}