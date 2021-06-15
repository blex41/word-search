# word-search

[![Build Status](https://travis-ci.com/blex41/word-search.svg?branch=master)](https://travis-ci.com/blex41/word-search)
[![Coverage Status](https://coveralls.io/repos/github/blex41/word-search/badge.svg?branch=master)](https://coveralls.io/github/blex41/word-search?branch=master)

Word search puzzle generator.

## Installation

With NodeJS:

    npm install -S @blex41/word-search

... and then:

```javascript
const WordSearch = require("@blex41/word-search");
```

In a browser:

```html
<script src="https://unpkg.com/@blex41/word-search@latest/dist/wordsearch.min.js"></script>
<script>
  /* WordSearch is available here */
</script>
```

## Usage

```javascript
// If an option is missing, it will be given a default value
const options = {
  cols: 6,
  rows: 6,
  disabledDirections: ["N", "W", "NW", "SW"],
  dictionary: ["Hello", "crêpe", "Škoda", "word", "search"],
  maxWords: 20,
  backwardsProbability: 0.3,
  upperCase: true,
  diacritics: true
};

// Create a new puzzle
const ws = new WordSearch(options);

// Use its methods
console.log(ws.toString());
// S Š M Y W X
// E C K M O G
// A R Z O R A
// R Ê N F D I
// C P I Y Q A
// H E L L O I
```

## Options

Here are the options you can pass when creating a new puzzle:

| name                 | type         | default | description                                                                                                                              |
| -------------------- | ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| cols                 | Integer      | `10`    | Number of columns                                                                                                                        |
| rows                 | Integer      | `10`    | Number of rows                                                                                                                           |
| disabledDirections   | Array.String | `[]`    | Directions to disable (any of "N", "S", "E", "W", "NE", "NW", "SE" or "SW")                                                              |
| dictionary           | Array.String | `[]`    | Words to insert in the grid (some of them may not be inserted if they're too long, cannot be placed, or if maxWords is exceeded)         |
| maxWords             | Integer      | `20`    | Maximum number of words to insert                                                                                                        |
| backwardsProbability | Float        | `0.3`   | Probability to have each word written backwards (it's a probability, not a strict percentage)                                            |
| upperCase            | Boolean      | `true`  | Whether the letters in the grid should be uppercase                                                                                      |
| diacritics           | Boolean      | `false` | Whether the letters in the grid should keep their diacritics (accents)                                                                   |
| forbiddenWords       | Array.String | `[]`    | Words which should not appear accidentally in the final grid, in any direction (e.g. profanity). Will try rebuilding it for `maxRetries` |
| maxRetries           | Integer      | `10`    | Used only for the `forbiddenWords` option - how many attempts should be made to rebuild the grid when finding forbidden words in it      |

## Properties and methods

Once you have created your instance, you can access these Read-Only properties:

### ws.grid

Returns the puzzle's grid

```json
[
  ["S", "Š", "M", "Y", "W", "X"],
  ["E", "C", "K", "M", "O", "G"],
  ["A", "R", "Z", "O", "R", "A"],
  ["R", "Ê", "N", "F", "D", "I"],
  ["C", "P", "I", "Y", "Q", "A"],
  ["H", "E", "L", "L", "O", "I"]
]
```

### ws.words

Returns the words that were successfully inserted in the grid:

```javascript
[
  {
    word: "word",
    clean: "WORD",
    path: [
      { x: 4, y: 0 }, // W
      { x: 4, y: 1 }, // O
      { x: 4, y: 2 }, // R
      { x: 4, y: 3 } // D
    ]
  },
  {
    word: "crêpe",
    clean: "CRÊPE",
    path: [
      { x: 1, y: 1 }, // C
      { x: 1, y: 2 }, // R
      { x: 1, y: 3 }, // Ê
      { x: 1, y: 4 }, // P
      { x: 1, y: 5 } // E
    ]
  }
  /* ... */
];
```

### ws.forbiddenWordsIncluded

Returns an Array of forbidden words which were inserted into the grid because no other solution was found after `maxRetries`:

```javascript
["CRAP"]
```

You can also use these methods:

### ws.dump()

Returns an Object representing the state of the puzzle. This can be useful if you want to save a game and reuse it later using `ws.load(backup)`.

### ws.load(backup)

Loads a game from an Object of a previous dump.

```javascript
const ws1 = new WordSearch(/* ... */);
const backup = ws1.dump();
const ws2 = new WordSearch().load(backup);
// ws2 is now a copy of ws1
```

### ws.toString()

Returns a String representing the grid of the puzzle. This can be useful if you want to print it to the console.

    S Š M Y W X
    E C K M O G
    A R Z O R A
    R Ê N F D I
    C P I Y Q A
    H E L L O I

### ws.read(start, end)

Reads the letters from `start` to `end` positions and returns the String it forms. This can be useful to check what letters a user highlighted.

```javascript
ws.read({ x: 1, y: 0 }, { x: 5, y: 4 }); // "ŠKODA"
```
