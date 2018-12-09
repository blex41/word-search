const { getWordStartBoundaries } = require("../src/utils.js");

const testCases = [
  {
    wordLength: 16,
    direction: "N",
    cols: 16,
    rows: 16,
    result: { minX: 0, maxX: 15, minY: 15, maxY: 15 }
  },
  {
    wordLength: 4,
    direction: "N",
    cols: 25,
    rows: 25,
    result: { minX: 0, maxX: 24, minY: 3, maxY: 24 }
  },
  {
    wordLength: 16,
    direction: "S",
    cols: 16,
    rows: 16,
    result: { minX: 0, maxX: 15, minY: 0, maxY: 0 }
  },
  {
    wordLength: 4,
    direction: "S",
    cols: 25,
    rows: 25,
    result: { minX: 0, maxX: 24, minY: 0, maxY: 21 }
  },
  {
    wordLength: 16,
    direction: "E",
    cols: 16,
    rows: 16,
    result: { minX: 0, maxX: 0, minY: 0, maxY: 15 }
  },
  {
    wordLength: 4,
    direction: "E",
    cols: 25,
    rows: 25,
    result: { minX: 0, maxX: 21, minY: 0, maxY: 24 }
  },
  {
    wordLength: 16,
    direction: "W",
    cols: 16,
    rows: 16,
    result: { minX: 15, maxX: 15, minY: 0, maxY: 15 }
  },
  {
    wordLength: 4,
    direction: "W",
    cols: 25,
    rows: 25,
    result: { minX: 3, maxX: 24, minY: 0, maxY: 24 }
  },
  {
    wordLength: 16,
    direction: "SE",
    cols: 16,
    rows: 16,
    result: { minX: 0, maxX: 0, minY: 0, maxY: 0 }
  },
  {
    wordLength: 4,
    direction: "SE",
    cols: 25,
    rows: 25,
    result: { minX: 0, maxX: 21, minY: 0, maxY: 21 }
  },
  {
    wordLength: 16,
    direction: "SW",
    cols: 16,
    rows: 16,
    result: { minX: 15, maxX: 15, minY: 0, maxY: 0 }
  },
  {
    wordLength: 4,
    direction: "SW",
    cols: 25,
    rows: 25,
    result: { minX: 3, maxX: 24, minY: 0, maxY: 21 }
  },
  {
    wordLength: 16,
    direction: "NE",
    cols: 16,
    rows: 16,
    result: { minX: 0, maxX: 0, minY: 15, maxY: 15 }
  },
  {
    wordLength: 4,
    direction: "NE",
    cols: 25,
    rows: 25,
    result: { minX: 0, maxX: 21, minY: 3, maxY: 24 }
  },
  {
    wordLength: 16,
    direction: "NW",
    cols: 16,
    rows: 16,
    result: { minX: 15, maxX: 15, minY: 15, maxY: 15 }
  },
  {
    wordLength: 4,
    direction: "NW",
    cols: 25,
    rows: 25,
    result: { minX: 3, maxX: 24, minY: 3, maxY: 24 }
  },
  {
    wordLength: 4,
    direction: "NX",
    cols: 25,
    rows: 25,
    result: null // "X" is an unknown direction
  },
  {
    wordLength: 42,
    direction: "S",
    cols: 5,
    rows: 5,
    result: null // The word is too long (out of boundaries)
  }
];

describe("utils.getWordStartBoundaries", () => {
  testCases.forEach(t => {
    it(`returns correct boundaries (wordLength: ${t.wordLength}, direction: "${
      t.direction
    }", cols: ${t.cols}, rows: ${t.rows})`, () => {
      expect(
        getWordStartBoundaries(t.wordLength, t.direction, t.cols, t.rows)
      ).toEqual(t.result);
    });
  });
});
