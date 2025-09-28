export const LEVEL_THREE_DIALOG = {
  story: {
    mainStarts: true,
    main:[
      "This place is... spooky.",
      "There's rubble everywhere, I don't have the strength for this!"
    ],
    npc: [
      "The Wizard never comes down to the dungeons anymore.",
      "With my new powers you have unlocked a new spell, click away!",
    ]
  },
  battle: {
    mainStarts: false,
    main: ["WOAH!!!"],
    npc: ["This one is so powerful!!"]
  },
  ending: {
    mainStarts: true,
    main: ["...", "The familiar!!!!", "Let's go back, the Wizard will be very so relieved!"],
    npc: ["Is that...?", "The familiar is a... cat?"]
  }
}