const { getAllCharSequencesFromGrid } = require("../src/utils.js");

const testCases = [
	{
		name: "2x2",
		grid: [
			["A", "B"],
			["C", "D"]
		],
		result: "AB|AD|CD|CB|AC|BD"
	},
	{
		name: "3x3",
		grid: [
			["A", "B", "C"],
			["D", "E", "F"],
			["G", "H", "I"]
		],
		result: "ABC|AEI|DEF|DH|DB|GHI|GEC|ADG|BEH|BF|HF|CFI"
	},
	{
		name: "3x4",
		grid: [
			["A", "B", "C"],
			["D", "E", "F"],
			["G", "H", "I"],
			["J", "K", "L"]
		],
		result: "ABC|AEI|DEF|DHL|DB|GHI|GK|GEC|JKL|JHF|ADGJ|BEHK|BF|KI|CFIL"
	},
	{
		name: "10x5",
		grid: [
			["H", "O", "G", "N", "I", "A", "Q", "R", "S", "D"],
			["L", "M", "F", "N", "T", "N", "F", "N", "L", "U"],
			["T", "J", "P", "R", "P", "E", "V", "R", "M", "E"],
			["Y", "T", "R", "R", "Y", "K", "O", "F", "B", "D"],
			["B", "G", "G", "R", "P", "W", "V", "M", "G", "N"]
		],
		result: "HOGNIAQRSD|HMPRP|LMFNTNFNLU|LJRR|LO|TJPRPEVRME|TTG|TMG|"
      + "YTRRYKOFBD|YG|YJFN|BGGRPWVMGN|BTPNI|HLTYB|OMJTG|OFRYW|GRRTA|"
      + "GFPRG|GNPKV|GRPNQ|NNRRR|NTEOM|RYEFR|ITPYP|INVFG|PKVNS|ANEKW|"
      + "AFRBN|WORLD|QFVOV|QNMD|VFMU|RNRFM|RLE|MBE|SLMBG|SU|GD|DUEDN"
	}
];

describe("utils.getAllCharSequencesFromGrid", () => {
	testCases.forEach(t => {
		it(`returns correct sequences (${t.name} grid)`, () => {
			expect(getAllCharSequencesFromGrid(t.grid)).toEqual(t.result);
		});
	});
});
