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

  describe('advantage score', () => {
      it.each`
  player1Score | player2Score | expectedScore
   ${4}        | ${3}         | ${'advantage player1'}
   ${5}        | ${4}         | ${'advantage player1'}
   ${3}        | ${4}         | ${'advantage player2'}
  `('should be $expectedScore for $player1Score $player2Score', ({player1Score, player2Score, expectedScore}) => {
          const tennis = new Tennis();

          expect(tennis.score(player1Score,player2Score)).toBe(expectedScore);
      });
  });

  describe('tie score', () => {
      it.each`
  player1Score | player2Score | expectedScore
   ${3}        | ${3}         | ${'deuce'}
  `('should be $expectedScore for $player1Score $player2Score', ({player1Score, player2Score, expectedScore}) => {
          const tennis = new Tennis();

          expect(tennis.score(player1Score,player2Score)).toBe(expectedScore);
      });
  });

  describe('winning score', () => {
      it.each`
  player1Score | player2Score | expectedScore
   ${4}        | ${0}         | ${'winner player1'}
   ${0}        | ${4}         | ${'winner player2'}
   ${5}        | ${0}         | ${'winner player1'}
   ${0}        | ${5}         | ${'winner player2'}
   ${4}        | ${6}         | ${'winner player2'}
   ${6}        | ${4}         | ${'winner player1'}
  `('should be $expectedScore for $player1Score $player2Score', ({player1Score, player2Score, expectedScore}) => {
          const tennis = new Tennis();

          expect(tennis.score(player1Score,player2Score)).toBe(expectedScore);
      });
  });
});
