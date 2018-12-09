const { createPathFromPair } = require("../src/utils.js");

const testCases = [
  // N
  {
    start: { x: 0, y: 2 },
    end: { x: 0, y: 0 },
    res: [{ x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }]
  },
  // S
  {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 2 },
    res: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
  },
  // E
  {
    start: { x: 0, y: 0 },
    end: { x: 2, y: 0 },
    res: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]
  },
  // W
  {
    start: { x: 2, y: 0 },
    end: { x: 0, y: 0 },
    res: [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }]
  },
  // NE
  {
    start: { x: 0, y: 2 },
    end: { x: 2, y: 0 },
    res: [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }]
  },
  // NW
  {
    start: { x: 2, y: 2 },
    end: { x: 0, y: 0 },
    res: [{ x: 2, y: 2 }, { x: 1, y: 1 }, { x: 0, y: 0 }]
  },
  // SE
  {
    start: { x: 0, y: 0 },
    end: { x: 2, y: 2 },
    res: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }]
  },
  // SW
  {
    start: { x: 2, y: 0 },
    end: { x: 0, y: 2 },
    res: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }]
  },
  // Not a straight path
  {
    start: { x: 2, y: 0 },
    end: { x: 0, y: 3 },
    res: null
  }
];

describe("utils.createPathFromPair", () => {
  testCases.forEach(t => {
    it(`returns correct path (start: ${JSON.stringify(
      t.start
    )}, end: ${JSON.stringify(t.end)})`, () => {
      expect(createPathFromPair(t.start, t.end)).toEqual(t.res);
    });
  });
});
