class Tennis {
    score(player1Points, player2Points) {
        if (player1Points === 4) {
            return 'winner player1';
        }
        if (player2Points === 4) {
            return 'winner player2';
        }
        const points = {
            0: 'love',
            1: 'fifteen',
            2: 'thirty',
            3: 'forty',
        };
        return `${points[player1Points]}-${points[player2Points]}`;
    }
}

module.exports = Tennis;
