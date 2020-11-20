const Tennis = require('../src/tennis');

describe('Tennis', () => {
  it('should be love-love for 0 0', () => {

    const tennis = new Tennis();

    expect(tennis.score(0,0)).toBe('love-love');
  });

  it('should be fifteen-love for 1 0', () => {

    const tennis = new Tennis();

    expect(tennis.score(1,0)).toBe('fifteen-love');
  });
});
