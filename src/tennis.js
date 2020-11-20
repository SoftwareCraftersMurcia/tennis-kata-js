class Tennis {
    score(player1Points, player2Points) {
        if (this.isAdvantage(player1Points, player2Points)) {
            return player1Points > player2Points
                ? 'advantage player1'
                : 'advantage player2';
        }

        if (player1Points >= 4) {
            return 'winner player1';
        }
        if (player2Points >= 4) {
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

    isAdvantage(player1Points, player2Points) {
        return player1Points >= 3 &&
            player2Points >= 3 &&
            Math.abs(player1Points - player2Points) === 1;
    }
}

module.exports = Tennis;
