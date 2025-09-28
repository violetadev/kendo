export const LEVEL_THREE_DIALOG = {
  story: {
    mainStarts: true,
    main: [
      { id: 'main', text: "This place is... spooky." },
      { id: 'main', text: "There's rubble everywhere, I don't have the strength for this!" },
      { id: 'main', text: "<<END>>" },
    ],
    npc: [
      { id: 'cindrel_2', text: "The Wizard never comes down to the dungeons anymore." },
      { id: 'cindrel_2', text: "With my new powers you have unlocked a new spell, click away!" },
      { id: 'cindrel_2', text: "<<END>>" },
    ],
  },
  battle: {
    mainStarts: false,
    main: [
      { id: 'main', text: "WOAH!!!" },
    ],
    npc: [
      { id: 'cindrel_2', text: "This one is so powerful!!" },
      { id: 'cindrel_2', text: "<<END>>" },
    ],
  },
  ending: {
    mainStarts: false,
    main: [
      { id: 'main', text: "!!!" },
      { id: 'main', text: "The familiar!!!!" },
      { id: 'main', text: "Let's go back, the Wizard will be very so relieved!" },
      { id: 'familiar_happy', text: "Meow!!" },
    ],
    npc: [
      { id: 'familiar', text: "Meow!" },
      { id: 'cindrel_2', text: "Is that...?" },
      { id: 'cindrel_2', text: "The familiar is a... cat?" },
      { id: 'cindrel_2', text: "<<END>>" },
    ],
  },
}
