const { normalizeWord } = require("../src/utils.js");

const testCases = [
  {
    word: "",
    upperCase: true,
    diacritics: false,
    result: ""
  },
  {
    word: "HelLo",
    upperCase: true,
    diacritics: false,
    result: "HELLO"
  },
  {
    word: "àâÄÉÈêëîïìôÒÖûùü",
    upperCase: true,
    diacritics: false,
    result: "AAAEEEEIIIOOOUUU"
  },
  {
    word: "àâÄÉÈêëîïìôÒÖûùü",
    upperCase: undefined,
    diacritics: undefined,
    result: "AAAEEEEIIIOOOUUU"
  },
  {
    word: "àâÄÉÈêëîïìôÒÖûùü",
    upperCase: false,
    diacritics: false,
    result: "aaaeeeeiiiooouuu"
  },
  {
    word: "àâÄÉÈêëîïìôÒÖûùü",
    upperCase: true,
    diacritics: true,
    result: "ÀÂÄÉÈÊËÎÏÌÔÒÖÛÙÜ"
  },
  {
    word: "àâÄÉÈêëîïìôÒÖûùü",
    upperCase: false,
    diacritics: true,
    result: "àâäéèêëîïìôòöûùü"
  }
];

describe("utils.normalizeWord", () => {
  testCases.forEach(t => {
    it(`returns correctly formatted string (word: "${t.word}", upperCase: ${
      t.upperCase
    }, diacritics: ${t.diacritics})`, () => {
      expect(normalizeWord(t.word, t.upperCase, t.diacritics)).toEqual(
        t.result
      );
    });
  });
});
