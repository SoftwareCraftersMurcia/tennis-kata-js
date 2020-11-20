const Tennis = require('../src/tennis');

describe('Tennis', () => {
  it.each`
  player1Score | player2Score | expectedScore
   ${0}        | ${0}         | ${'love-love'}
   ${1}        | ${0}         | ${'fifteen-love'}
   ${2}        | ${0}         | ${'thirty-love'}
   ${3}        | ${0}         | ${'forty-love'}
   ${0}        | ${1}         | ${'love-fifteen'}
   ${0}        | ${2}         | ${'love-thirty'}
   ${0}        | ${3}         | ${'love-forty'}
  `('should be $expectedScore for $player1Score $player2Score', ({player1Score, player2Score, expectedScore}) => {

    const tennis = new Tennis();

    expect(tennis.score(player1Score,player2Score)).toBe(expectedScore);
  });
});
