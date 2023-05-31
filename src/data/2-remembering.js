export const rememberingScreens1 = [
  {
    page: 1,
    speaker: 'Caramel',
    script:
      'Let’s have a look around us, maybe something will remind you of who you are.',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Caramel',
    script:
      'Let’s have a look around us, maybe something will remind you of who you are.',
    choices: [
      {
        label: 'Sure',
        nextPage: 3,
      },
      {
        label: 'No',
        nextPage: 4,
      },
    ],
    nextPage: 2,
  },
  {
    page: 3,
    speaker: '???',
    script: 'Sure…',
    nextPage: null,
    forcedUrl: '/activities/find-primary',
  },
  {
    page: 4,
    speaker: '???',
    script: 'No',
    nextPage: 5,
  },
  {
    page: 5,
    speaker: 'Caramel',
    script: "Whaaat... Don't you want to remember who you are?",
    nextPage: 6,
  },
  {
    page: 6,
    speaker: '???',
    script: 'Alright… I guess I’ll give it a go.',
    nextPage: null,
    forcedUrl: '/activities/find-primary',
  },
];

export const rememberingScreens2 = [
  {
    page: 1,
    speaker: '???',
    script:
      'These items…there’s something special about them. They remind me of…',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: '???',
    script: 'Oh, yes. Home. How can I forget? I…I’m so sorry… *sob*',
    nextPage: 3,
  },
  {
    page: 3,
    speaker: 'Caramel',
    script: 'Hey, don’t cry! At least you remember who you are now, do you?',
    nextPage: 4,
  },
  {
    page: 4,
    speaker: '???',
    script:
      '*sob* Yes, I’m Picasso… I got lost, after leaving home… *sob* *sob*',
    nextPage: 5,
  },
  {
    page: 5,
    speaker: 'Piccaso',
    script:
      'It’s so dark and scary in this place, and I can never find my way home… I will be trapped here forever with this weird bird, no…',
    nextPage: 6,
  },
  {
    page: 6,
    speaker: 'Caramel',
    script:
      '… Hey Picasso, look at yourself! You’ve got all 3 primary colours on your body, surely they can help you find your way back home!',
    nextPage: 7,
  },
  {
    page: 7,
    speaker: 'Caramel',
    script:
      'Yes, the 3 primary colours are red, yellow, and blue. These are the special colours that you can create anything with!',
    nextPage: 8,
  },
  {
    page: 8,
    speaker: 'Piccaso',
    script:
      'Red, yellow and blue… my body has always looked like this.',
    nextPage: 9,
  },
  {
    page: 9,
    speaker: 'Caramel',
    script:
      'They are called primary colours. If you mix them together, you can even create a rainbow!',
    nextPage: 10,
  },
  {
    page: 10,
    speaker: 'Piccaso',
    script:
      '…Caramel?',
    nextPage: 11,
  },
  {
    page: 11,
    speaker: 'Caramel',
    script:
      'Yes?',
    nextPage: 12,
  },
  {
    page: 12,
    speaker: 'Picasso',
    script:
      'You’re just a bird with one yellow colour.',
    nextPage: 13,
  },
  {
    page: 13,
    speaker: 'Picasso',
    script:
      'If you know this much, you better help me get back home.',
    nextPage: 14,
  },
  {
    page: 14,
    speaker: 'Caramel',
    script:
      'I thought we were friends…',
    nextPage: 15,
  },
  {
    page: 15,
    speaker: 'Caramel',
    script:
      'If you want help to get back home, you better answer these correctly.',
    nextPage: 16,
  },
  {
    page: 16,
    speaker: 'Caramel',
    script:
      'Which colour is a primary colour Picasso?',
    choices: [
      {
        label: 'Red',
        nextPage: 17,
      },
      {
        label: 'Purple',
        nextPage: 18,
      },
      {
        label: 'Green',
        nextPage: 18,
      },
    ],
    nextPage: 16,
  },
  {
    page: 17,
    speaker: 'Caramel',
    script:
      'Good job! You’re learning pretty quickly, Picasso!',
    nextPage: 19,
  },
  {
    page: 18,
    speaker: 'Caramel',
    script:
      'Hmm… Not quite, are you sure that colour is on your body?',
    nextPage: 16,
  },
  {
    page: 19,
    speaker: 'Caramel',
    script:
      'Now, which colour is NOT a primary colour?',
    choices: [
      {
        label: 'Yellow',
        nextPage: 20,
      },
      {
        label: 'Orange',
        nextPage: 21,
      },
      {
        label: 'Blue',
        nextPage: 20,
      },
    ],
    nextPage: 19,
  },
  {
    page: 20,
    speaker: 'Caramel',
    script:
      'Think again Picasso, is this colour on your body?',
    nextPage: 19,
  },
  {
    page: 21,
    speaker: 'Caramel',
    script:
      'I think we’re ready to get you on your way back home! We about to see some Orange!',
    nextPage: 22,
  },
  {
    page: 22,
    speaker: 'Piccaso',
    script: 'Yes, but...',
    nextPage: 23,
  },
  {
    page: 23,
    speaker: 'Piccaso',
    script: 'I don’t even know where I am, how am I supposed to go back home?',
    nextPage: 24,
  },
  {
    page: 3,
    speaker: 'Caramel',
    script:
      'Don’t worry, Picasso - you have all the primary colours: red, yellow and blue, for your journey! Caramel will help get you home.',
    nextPage: null,
    forcedUrl: '/modules/1',
  },
];
