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
    nextPage: 6,
  },
  {
    page: 3,
    speaker: 'Picasso',
    script: 'Sure…',
    nextPage: null,
    forcedUrl: '/activities/find-primary',
  },
  {
    page: 4,
    speaker: 'Picasso',
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
    speaker: 'Picasso',
    script: 'Alright… I guess I’ll give it a go.',
    nextPage: null,
    forcedUrl: '/activities/find-primary',
  },
];

export const rememberingScreens2 = [
  {
    page: 1,
    speaker: 'Piccaso',
    script:
      'These items…there’s something special about them. They remind me of…',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Piccaso',
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
    speaker: 'Piccaso',
    script:
      '*sob* Yes, I’m Picasso… I got lost, after leaving home… *sob* *sob*',
    nextPage: 5,
  },
  {
    page: 5,
    speaker: 'Piccaso',
    script:
      'It’s so dark and scary in this place, and I can never find my way home… I will be trapped here forever with this weird bird, no…',
    nextPage: null,
    forcedUrl: '/activities/teach-primary',
  },
];

export const rememberingScreens3 = [
  {
    page: 1,
    speaker: 'Piccaso',
    script: 'Yes, but...',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Piccaso',
    script: 'I don’t even know where I am, how am I supposed to go back home?',
    nextPage: 3,
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
