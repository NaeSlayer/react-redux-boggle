export const calculateTotalScore = (correctWords) => {
    let totalScore = 0;
    for (let i = 0; i < correctWords.length; i++) {
        totalScore = totalScore + calculateWordScore(correctWords[i]);
    }
    return totalScore;
}

export const calculateWordScore = (word) => {
    let score = 0;
    switch (word.length) {
        case 3:
            score = 1;
            break;
        case 4:
            score = 1;
            break;
        case 5:
            score = 2;
            break;
        case 6:
            score = 3;
            break;
        case 7:
            score = 5;
            break;
        case 8:
            score = 11;
            break
        default:
            score = 11;
            break;
    };
    return score;
}