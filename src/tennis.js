class Tennis {
    score(player1Points, player2Points) {
        const points = ['fifteen', 'thirty', 'forty', 'love'];
        if (player1Points === 1) {
            return points[0] + '-love';
        }
        if (player1Points === 2) {
            return points[1] + '-love';
        }
        if (player1Points === 3) {
            return points[2] + '-love';
        }
        return points[3] + '-love';
    }
}

module.exports = Tennis;
