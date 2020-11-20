class Tennis {
    score(player1Points, player2Points) {
        const points = ['fifteen'];
        if (player1Points === 1) {
            return points[0] + '-love';
        }
        if (player1Points === 2) {
            return 'thirty-love';
        }
        if (player1Points === 3) {
            return 'forty-love';
        }
        return 'love-love';
    }
}

module.exports = Tennis;
