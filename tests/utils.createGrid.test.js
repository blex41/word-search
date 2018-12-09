const { createGrid } = require("../src/utils.js");

const testCases = [
  {
    cols: 4,
    rows: 4,
    result: [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."]
    ]
  },
  {
    cols: 8,
    rows: 2,
    result: [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."]
    ]
  }
];

describe("utils.createGrid", () => {
  testCases.forEach(t => {
    it(`returns correct grid (cols: ${t.cols}, rows: ${t.rows})`, () => {
      expect(createGrid(t.cols, t.rows)).toEqual(t.result);
    });
  });
});
