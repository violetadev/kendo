export const LEVEL_FOUR_DIALOG = {
  story: {
    mainStarts: true,
    main: [
      { id: 'main', text: "Master! We found your familiar, safe and sound." },
      { id: 'main', text: "Cindrel and I worked together, and the cat led us back here." },
      { id: 'main', text: "I never imagined we'd succeed… but we did it together." },
      { id: 'cindrel', text: "We are more than happy to help!" },
      { id: 'main', text: "<<END>>" },
    ],
    npc: [
      { id: 'wizard', text: "My dearest companion… you've returned at last!" },
      { id: 'wizard_happy', text: "Apprentice, you've done what even I could not. I am proud of you." },
      { id: 'wizard_happy', text: "You've earned more than my gratitude." },
      { id: 'wizard_happy', text: "Take this relic — an ancient charm of protection. It will aid you in journeys to come." },
      { id: 'cindrel', text: "Woah… that looks incredible! You deserve it." },
      { id: 'wizard_happy', text: "Use it wisely, apprentice. Your real adventure has only just begun." },
      { id: 'wizard_happy', text: "<<END>>" },
    ],
  }
}
