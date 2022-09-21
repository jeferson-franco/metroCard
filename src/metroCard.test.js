const solution = require('./metroCard.js');

test('test 1', () => {
    expect(solution(30)).toEqual([31]);
});

test('test 2', () => {
    expect(solution(31)).toEqual([28, 30, 31]);
});
