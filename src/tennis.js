class Tennis {
    score(player1Points, player2Points) {
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
