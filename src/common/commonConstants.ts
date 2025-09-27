export type CHARACTER_TYPE = {
  id: string,
  image: string, 
  name: string
};

export const CHARACTERS = [
  { id: 'purple', image: 'assets/purple.png', name: 'Elorien'},
  { id: 'blue', image: 'assets/blue.png', name: 'Oriven'},
  { id: 'grey', image: 'assets/grey.png', name: 'Mirev'},
];

export const NPCS = [
  { id: 'wizard', image: 'assets/wizard.png', name: 'Thalen'},
  { id: 'familiar', image: 'assets/familiar.png', name: 'Fuzzle'},
  { id: 'cindrel', image: 'assets/mascot.png', name: 'Cindrel'}
];

export const MASCOT = { 
  id: 'cindrel', 
  image: 'assets/mascot.png', 
  name: 'Cindrel',
  levels: [
    { 
      level: 1,
      image: 'assets/mascot.png',
    },
    { 
      level: 2,
      image: 'assets/mascot2.png',
    },
    { 
      level: 3,
      image: 'assets/mascot3.png',
    },
    { 
      level: 4,
      image: 'assets/mascot4.png',
    }
  ]
}