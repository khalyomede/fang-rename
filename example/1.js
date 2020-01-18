// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const rename = require("../lib");

const ts = {
	name: "Typescript",
	input: "example/code.ts",
	tasks: [
		rename({
			extname: ".js",
		}),
		save({
			folder: "example/dist/js",
		}),
	],
};

const main = async () => await run([ts]);

main();
