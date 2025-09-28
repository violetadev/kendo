export const LEVEL_ONE_DIALOG = {
  story: {
    mainStarts: true,
    main: [
      { id: 'main', text: "This place is such a mess, no wonder the wizard can't find his familiar." },
      { id: 'main', text: "Maybe the creature is hiding behind them. But how do I move all of this?" },
      { id: 'main', text: "Alright, I'll start blasting them aside." },
    ],
    npc: [
      { id: 'cindrel', text: "Boxes piled from floor to ceiling…" },
      { id: 'cindrel', text: "Easy. You don't need strength. Your staff holds the wizard's magic. Click on them, and they'll vanish." },
      { id: 'cindrel', text: "<<END>>" },
    ],
  },
  battle: {
    mainStarts: false,
    main: [
      { id: 'main', text: "On guard!" },
    ],
    npc: [
      { id: 'cindrel_worried', text: "Hurry up! Before the time runs out!" },
      { id: 'cindrel_worried', text: "<<END>>" },
    ],
  },
  ending: {
    mainStarts: true,
    main: [
      { id: 'main', text: "That was close!" },
      { id: 'main', text: "Let's move on, I am covered in dust!" },
      { id: 'main', text: "<<END>>" },
    ],
    npc: [
      { id: 'cindrel', text: "I can't see the familiar anywhere" },
      { id: 'cindrel', text: "<<END>>" },
    ],
  },
}
