class Tennis {
    score(player1Points, player2Points) {
        const points = {
            0: 'love',
            1: 'fifteen',
            2: 'thirty',
            3: 'forty',
        };
        return points[player1Points] + '-love';
    }
}

module.exports = Tennis;
