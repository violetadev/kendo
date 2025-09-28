export const CHARACTERS = [
  { id: 'purple', image: 'assets/purple.png', name: 'Elorien'},
  { id: 'blue', image: 'assets/blue.png', name: 'Oriven'},
  { id: 'grey', image: 'assets/grey.png', name: 'Mirev'},
];

export const NPCS = [
  { id: 'wizard', image: 'assets/wizard.png', name: 'Thalen'},
  { id: 'wizardhappy', image: 'assets/wizard_worried.png', name: 'Thalen'},
  { id: 'wizardsad', image: 'assets/wizard_worried.png', name: 'Thalen'},
  { id: 'familiar', image: 'assets/familiar.png', name: 'Fuzzle', imageHappy: 'assets/familiar_happy.png'},
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
      image: 'assets/mascot3_happy.png',
    }
  ]
}

export const MONSTERS = [
  { id: 'rat', img: 'assets/rat.png', name: 'Magical Rat', spell: "🔥"},
  { id: 'zombie', img: 'assets/zombie.png', name: 'Zombie', spell: "🔥"},
  { id: 'demon', img: 'assets/demon.png', name: 'Demon', spell: "🔥"},
]

export const OBSTACLES = [
  { id: 'boxes', img: 'assets/box.png', name: 'Heavy Boxes', spell: "🔥"},
  { id: 'potions', img: 'assets/potions.png', name: 'Potions', spell: "🔥"},
  { id: 'boulder', img: 'assets/boulder.png', name: 'Boulder', spell: "🔥"},
]