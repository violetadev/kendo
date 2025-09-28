export const CHARACTERS = [
  { id: 'purple', image: 'assets/purple.png', name: 'Elorien', accent: 'purple'},
  { id: 'blue', image: 'assets/blue.png', name: 'Oriven', accent: 'blue'},
  { id: 'grey', image: 'assets/grey.png', name: 'Mirev', accent: 'grey'},
];

export const NPCS = [
  { id: 'wizard', image: 'assets/wizard.png', name: 'Thalen', accent: 'green'},
  { id: 'wizard_happy', image: 'assets/wizard_happy.png', name: 'Thalen', accent: 'green'},
  { id: 'wizard_sad', image: 'assets/wizard_worried.png', name: 'Thalen', accent: 'green'},
  { id: 'familiar', image: 'assets/familiar.png', name: 'Fuzzle', accent: 'black'},
  { id: 'familiar_happy', image: 'assets/familiar_happy.png', name: 'Fuzzle', accent: 'black'},
  { id: 'cindrel', image: 'assets/mascot.png', name: 'Cindrel', accent: 'red'},
  { id: 'cindrel_worried', image: 'assets/mascot_worried.png', name: 'Cindrel', accent: 'red'},
  { id: 'cindrel_2', image: 'assets/mascot2.png', name: 'Cindrel', accent: 'red'},
  { id: 'cindrel_2_worried', image: 'assets/mascot2_worried.png', name: 'Cindrel', accent: 'red'},
  { id: 'cindrel_3', image: 'assets/mascot3.png', name: 'Cindrel', accent: 'red'},
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
  { id: 'rat', img: 'assets/rat.png', name: 'Magical Rat', spell: "⚡"},
  { id: 'zombie', img: 'assets/zombie.png', name: 'Zombie', spell: "🌊"},
  { id: 'demon', img: 'assets/demon.png', name: 'Demon', spell: "🔥"},
]

export const OBSTACLES = [
  { id: 'boxes', img: 'assets/box.png', name: 'Heavy Boxes', spell: "⚡"},
  { id: 'potions', img: 'assets/potions.png', name: 'Potions', spell: "📦"},
  { id: 'boulder', img: 'assets/boulder.png', name: 'Boulder', spell: "⛏️"},
]