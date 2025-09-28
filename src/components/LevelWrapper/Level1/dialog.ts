export const LEVEL_ONE_DIALOG = {
  story: {
    mainStarts: true,
    main: [
    "This place is such a mess, no wonder the wizard can't find his familiar.",
    "Maybe the creature is hiding behind them. But how do I move all of this?",
    "Alright, I'll start blasting them aside.",
    ],
    npc:  [
    "Boxes piled from floor to ceiling…",
    "Easy. You don't need strength. Your staff holds the wizard's magic. Click on them, and they'll vanish.",
    "<<END>>"
  ]
  },
  battle: {
    mainStarts: false,
    main: ["On guard!"],
    npc: ["Oh no, it's a monster!", "<<END>>"]
  },
  ending: {
    mainStarts: true,
    main: ["That was close!", "Let's move on, I am covered in dust!", "<<END>>"],
    npc:  ["I can't see the familiar anywhere", "<<END>>"]
  }
}