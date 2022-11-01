// "import" the sum function from operations.js
const {sum} = require('./operations')

// "import" the subtract function from operations.js
const {subtract} = require('./operations')

// "import" the division function from operations.js
const {division} = require('./operations')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});

test('subtracts 3 - 0 to equal 3', () => {
    expect(subtract(3, 0)).toBe(3)
})

test('subtracts 5 - 4 to equal 1', () => {
    expect(subtract(5, 4)).toBe(1)
})

test('divides 10 / 2 to equal 5', () => {
    expect(division(10, 2)).toBe(5)
})

test('divides 1 / 0 to equal error', () => {
    expect(division(1, 0)).toBe(Infinity)
})
