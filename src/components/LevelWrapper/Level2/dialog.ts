export const LEVEL_TWO_DIALOG = {
  story: {
    mainStarts: true,
    main: [
      { id: 'main', text: "Let's be careful here… the Wizard's potions are all over the place." },
      { id: 'main', text: "I don't want to destroy anything!" },
      { id: 'main', text: "<<END>>" },
    ],
    npc: [
      { id: 'cindrel', text: "Your staff can help again." },
      { id: 'cindrel', text: "Don't worry! Click a potion and focus your will to store them away safely." },
      { id: 'cindrel', text: "<<END>>" },
    ],
  },
  battle: {
    mainStarts: false,
    main: [
      { id: 'main', text: "Watch out!" },
      { id: 'main', text: "<<END>>" },
    ],
    npc: [
      { id: 'cindrel', text: "Another one!" },
    ],
  },
  ending: {
    mainStarts: true,
    main: [
      { id: 'main', text: "For a moment I thought the Wizard's familiar was a zombie..." },
      { id: 'main', text: "Woah! Are you ok??" },
      { id: 'main', text: "Cindrel!! You seem so much stronger now! Let's keep searching" },
    ],
    npc: [
      { id: 'cindrel', text: "I am feeling a bit strange..." },
      { id: 'cindrel_2', text: "My powers are growing with you, I feel amazing!" },
      { id: 'cindrel_2', text: "<<END>>" },
    ],
  },
}
