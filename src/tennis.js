class Tennis {
    score(player1Points, player2Points) {
        const points = ['love', 'fifteen', 'thirty', 'forty'];
        return points[player1Points] + '-love';
    }
}

module.exports = Tennis;
