const { createPath } = require("../src/utils.js");

const testCases = [
  {
    x: 0,
    y: 0,
    dir: "S",
    len: 2,
    res: [{ x: 0, y: 0 }, { x: 0, y: 1 }]
  },
  {
    x: 0,
    y: 6,
    dir: "N",
    len: 2,
    res: [{ x: 0, y: 6 }, { x: 0, y: 5 }]
  },
  {
    x: 0,
    y: 6,
    dir: "E",
    len: 2,
    res: [{ x: 0, y: 6 }, { x: 1, y: 6 }]
  },
  {
    x: 6,
    y: 6,
    dir: "W",
    len: 2,
    res: [{ x: 6, y: 6 }, { x: 5, y: 6 }]
  },
  {
    x: 6,
    y: 6,
    dir: "SW",
    len: 2,
    res: [{ x: 6, y: 6 }, { x: 5, y: 7 }]
  }
];

describe("utils.createPath", () => {
  testCases.forEach(t => {
    it(`returns correct path (x: ${t.x}, y: ${t.y}, dir: "${t.dir}", len: ${
      t.len
    })`, () => {
      expect(createPath(t.x, t.y, t.dir, t.len)).toEqual(t.res);
    });
  });
});
