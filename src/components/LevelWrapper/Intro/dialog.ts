export const INTRO_DIALOG = {
  story: {
    mainStarts: true,
    main: [
      { id: 'main', text: "Master… this place is incredible! I can't believe I'm truly here." },
      { id: 'main', text: "Your library… the potions… all real." },
      { id: 'main', text: "I'll do my best to learn from you. Thank you for taking me as your apprentice." },
      { id: 'main', text: "It's gone? That sounds terrible." },
      { id: 'main', text: "I thought today would be all lessons but I cannot sit idly by while you grieve.." },
      { id: 'main', text: "Let me help you find this creature." },
      { id: 'main', text: "<<END>>" },
    ],
    npc: [
      { id: 'wizard', text: "Welcome, young one. Your journey begins." },
      { id: 'wizard', text: "And you will one day be the master of it all." },
      { id: 'wizard_sad', text: "………………… Forgive me, my heart is not light today. My magical companion has vanished." },
      { id: 'wizard_sad', text: "It is no ordinary creature, but my dearest ally... Without it, my power feels broken, incomplete." },
      { id: 'wizard', text: "You would search, even on your first day?" },
      { id: 'wizard', text: "Then go, apprentice! Bring it back, and prove your courage." },
      { id: 'wizard', text: "<<END>>" },
    ],
  },
  ending: {
    mainStarts: false,
    main: [
      { id: 'main', text: "Cindrel??" },
      { id: 'main', text: "I thought you wanted to stay home!" },
      { id: 'main', text: "We must find the Wizard's lost familiar." },
    ],
    npc: [
      { id: 'cindrel', text: "Woop woop!" },
      { id: 'cindrel', text: "You thought I was going to stay back at home while you go on adventures?" },
      { id: 'cindrel', text: "No way! I heard we have a mission." },
      { id: 'cindrel', text: "What are you waiting for?" },
      { id: 'cindrel', text: "<<END>>" },
    ],
  },
}
