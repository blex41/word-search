const { findPathInGrid } = require("../src/utils.js");

const testCases = [
  {
    name: "A",
    word: "HELLO",
    grid: [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    allowedDirections: ["N", "S"],
    backwardsProbability: 0.3,
    possible: false
  },
  {
    name: "B",
    word: "HELLO",
    grid: [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    allowedDirections: ["E"],
    backwardsProbability: 1,
    possible: true
  },
  {
    name: "C",
    word: "HELLO",
    grid: [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    allowedDirections: ["E"],
    backwardsProbability: 0,
    possible: true
  },
  {
    name: "D",
    word: "HELLO",
    grid: [
      [".", ".", "X", ".", "."],
      [".", ".", "X", ".", "."],
      [".", ".", "X", ".", "."]
    ],
    allowedDirections: ["N", "S", "E", "W", "NE", "NW", "SE", "SW"],
    backwardsProbability: 0.5,
    possible: false
  }
];

describe("utils.findPathInGrid", () => {
  testCases.forEach(t => {
    it(`returns correct result (case ${t.name})`, () => {
      const res = findPathInGrid(
        t.word,
        t.grid,
        t.allowedDirections,
        t.backwardsProbability
      );
      if (t.possible) {
        expect(res.length).toEqual(t.word.length);
      } else {
        expect(res).toEqual(false);
      }
    });
  });
});
