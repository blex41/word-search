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
    possible: false
  }
];

describe("utils.findPathInGrid", () => {
  testCases.forEach(t => {
    it(`returns correct result (case ${t.name})`, () => {
      const res = findPathInGrid(t.word, t.grid, t.allowedDirections);
      if (t.possible) {
        expect(res.length).toEqual(t.word.length);
      } else {
        expect(res).toEqual(false);
      }
    });
  });
});
