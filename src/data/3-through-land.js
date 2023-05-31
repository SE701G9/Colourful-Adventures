export const landScreens1 = [
  {
    page: 1,
    speaker: 'Caramel',
    script:
      'Before you set off on your journey, remember the primary colours: red, yellow and blue. You will be using these to make your way back home.',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Caramel',
    script: 'Are you ready for the next part of your journey, Picasso?',
    choices: [
      {
        label: 'Yes',
        nextPage: 5,
      },
      {
        label: 'No',
        nextPage: 3,
      },
    ],
    nextPage: 5,
  },
  {
    page: 3,
    speaker: 'Picasso',
    script: 'Not quite…',
    nextPage: 4,
  },
  {
    page: 4,
    speaker: 'Caramel',
    script:
      'No worries, we can always go over the primary colours again. Or did you just pick No for fun?!',
    forcedUrl: '/modules/1',
  },
  {
    page: 5,
    speaker: 'Picasso',
    script: '100% ready! I can’t wait to explore what’s out there!',
    nextPage: 6,
  },
  {
    page: 6,
    speaker: 'Caramel',
    script: 'That’s the spirit! Let’s go!',
    forcedUrl: '/activities/colour-mix-lava',
  },
];

export const landScreens2 = [
  {
    page: 1,
    speaker: 'Picasso',
    script: 'Okay, Caramel, primary colours make secondary colours, I get it.',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Picasso',
    script:
      'Now let’s get out of here, or we’re both getting turned into fried chicken!',
    nextPage: 3,
  },
  {
    page: 3,
    speaker: 'Caramel',
    script: 'Huh?',
    nextPage: 4,
  },
  {
    page: 4,
    speaker: 'Picasso',
    script:
      'Ok, you’ve got this Picasso. Try mixing blue and yellow together this time.',
    nextPage: 5,
  },
  {
    page: 5,
    speaker: 'Picasso',
    script: "Let's see...",
    nextPage: null,
    forcedUrl: '/activities/colour-mix-grass',
  },
];

export const landScreens3 = [
  {
    page: 1,
    speaker: 'Picasso',
    script: 'Phew… All this travelling is making me so tired… ',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Caramel',
    script: 'Yeah. *yawn*  Let’s find a place to rest for the night.',
    nextPage: 3,
  },
  {
    page: 3,
    speaker: 'Caramel',
    script: 'Try mixing the last two primary colours - red and blue!',
    nextPage: null,
    forcedUrl: '/activities/colour-mix-lake',
  },
];

export const landScreens4 = [
  {
    page: 1,
    speaker: 'Narrator',
    script:
      'Picasso has learnt the secondary colours now after the primary colours.',
    nextPage: 2,
  },
  {
    page: 2,
    speaker: 'Narrator',
    script: 'We have completed the basic colour wheel.',
    nextPage: 3,
  },
  {
    page: 3,
    speaker: 'Narrator',
    script: 'However, this is not the end of Picasso’s journey.',
    nextPage: 4,
  },
  {
    page: 4,
    speaker: 'Narrator',
    script: 'Coming up next on … Colourful Adventures …',
    nextPage: 5,
  },
  {
    page: 5,
    speaker: 'Narrator',
    script: 'Picasso must brave the terrors of the advanced tertiary colours.',
    nextPage: null,
    forcedUrl: '/modules/1',
  },
];
