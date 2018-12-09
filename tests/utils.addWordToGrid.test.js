const { addWordToGrid } = require("../src/utils.js");

const testCases = [
  {
    word: "HELLO",
    path: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 }
    ],
    grid: [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    result: [
      [".", ".", ".", ".", "."],
      ["H", "E", "L", "L", "O"],
      [".", ".", ".", ".", "."]
    ]
  },
  {
    word: "HEY",
    path: [{ x: 2, y: 2 }, { x: 1, y: 1 }, { x: 0, y: 0 }],
    grid: [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."]
    ],
    result: [
      ["Y", ".", ".", "."],
      [".", "E", ".", "."],
      [".", ".", "H", "."],
      [".", ".", ".", "."]
    ]
  }
];

describe("utils.addWordToGrid", () => {
  testCases.forEach(t => {
    it(`returns correct grid (word: "${t.word}", path: ${JSON.stringify(
      t.path
    )})`, () => {
      expect(addWordToGrid(t.word, t.path, t.grid)).toEqual(t.result);
    });
  });
});
