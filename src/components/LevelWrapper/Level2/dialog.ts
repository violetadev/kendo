export const LEVEL_TWO_DIALOG = {
  story: {
    mainStarts: true,
    main: [
    "Let's be careful here… the Wizard's potions are all over the place.",
    "I don't want to destroy anything!" 
    ],
    npc: [
    "Your staff can help again.",
    "Don't worry! Click a potion and focus your will to store them away safely.", 
    ]
  },
  battle: {
    mainStarts: false,
    main: ["Watch out!"],
    npc: ["Another one!"]
  },
  ending: {
    mainStarts: true,
    main: ["For a moment I thought the Wizard's familiar was a zombie...", "Woah! Are you ok??", "Cindrel!! You seem so much stronger now! Let's keep searching"],
    npc: ["I am feeling a bit strange...", "My powers are growing with you, I feel amazing!"]
  }
}