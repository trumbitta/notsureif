const hypeSentences = [
  'Heck yeah!',
  'Yes!',
  "You don't say!",
  'Absolutely!',
  'Awesome!',
  'Incredible!',
  'Unbelievable!',
  'Fantastic!',
  'Amazing!',
  'Outstanding!',
  'Phenomenal!',
  'Spectacular!',
  'Impressive!',
  'Mind-blowing!',
  'Stunning!',
  'Brilliant!',
  'Excellent!',
  'Terrific!',
  'Superb!',
  'Marvelous!',
];

const reaffirmingIntros = [
  'You sure are',
  'Indeed you are',
  'Of course you are',
  'You absolutely are',
  'You are, without a doubt,',
  'You undoubtedly are',
  'You certainly are',
  'You definitely are',
  'No question you are',
  'You unquestionably are',
  'You clearly are',
  'You evidently are',
  'You indisputably are',
  'You positively are',
  'You surely are',
  'You truly are',
  'You genuinely are',
  'You absolutely and positively are',
  'Without a shadow of a doubt you are',
  'Beyond any doubt you are',
  'There is no doubt you are',
];

export const useHypeText = () => {
  const getRandomHypeSentence = () => {
    return hypeSentences[Math.floor(Math.random() * hypeSentences.length)];
  };

  const getRandomReaffirmingIntro = () => {
    return reaffirmingIntros[
      Math.floor(Math.random() * reaffirmingIntros.length)
    ];
  };

  return {
    getRandomHypeSentence,
    getRandomReaffirmingIntro,
    hypeSentence: getRandomHypeSentence(),
    reaffirmingIntro: getRandomReaffirmingIntro(),
  };
};
