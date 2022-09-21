function solution(lastNumberOfDays) {
    let result = [];
    if (lastNumberOfDays === 28) {
        result.push(31);
    } else if (lastNumberOfDays === 30) {
        result.push(31);
    } else if (lastNumberOfDays === 31) {
        result.push(28, 30, 31);
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test metroCard

// alternative solution
