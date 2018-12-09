const _shuffle = require("lodash/shuffle");
const _merge = require("lodash/merge");
const _difference = require("lodash/difference");
const _cloneDeep = require("lodash/cloneDeep");
const utils = require("./utils.js");
const defaultSettings = require("./defaultsettings.js");

class WordSearch {
  constructor(options = {}) {
    this.settings = _merge(defaultSettings, options);
    this.settings.allowedDirections = _difference(
      this.settings.allowedDirections,
      this.settings.disabledDirections
    );
    this.data = this.buildGame();
  }
  get grid() {
    return _cloneDeep(this.data.grid);
  }
  get words() {
    return _cloneDeep(this.data.words);
  }
  get defaultSettings() {
    return _cloneDeep(defaultSettings);
  }
  get utils() {
    return utils;
  }
  buildGame() {
    let grid = utils.createGrid(this.settings.cols, this.settings.rows);
    const addedWords = [];
    const dict = _shuffle(this.settings.dictionary);
    dict.forEach(word => {
      if (addedWords.length < this.settings.maxWords) {
        const clean = utils.normalizeWord(
          word,
          this.settings.upperCase,
          this.settings.diacritics
        );
        const path = utils.findPathInGrid(
          clean,
          grid,
          this.settings.allowedDirections
        );
        if (path !== false) {
          grid = utils.addWordToGrid(clean, path, grid);
          addedWords.push({ word, clean, path });
        }
      }
    });
    addedWords.sort();
    grid = utils.fillGrid(grid, this.settings.upperCase);

    return { grid, words: addedWords };
  }
  dump() {
    return _cloneDeep({ settings: this.settings, data: this.data });
  }
  load(config) {
    _merge(this, config);
    return this;
  }
  read(start, end) {
    const path = utils.createPathFromPair(start, end);
    if (path) {
      return path.map(pos => this.data.grid[pos.y][pos.x]).join("");
    }
    return null;
  }
  toString() {
    return this.data.grid.map(l => l.join(" ")).join("\n");
  }
}

module.exports = WordSearch;
