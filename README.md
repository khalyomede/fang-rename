# fang-rename

Rename your input files, change their extension, add suffixes, ... using rename.

## Summary

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)
- [Changelog](CHANGELOG.md)

## About

I created this plugin for those who need a flexible way to rename their output file. As this is a common task, I wanted to created an "official" plugin, but feel free to check out others solution!

## Requirements

Having [@fang/core](https://npmjs.com/package/@fang/core) installed on version `0.*`.

## Features

- Everything that [rename](https://npmjs.com/package/rename) can do, which means
  - changing the original directory name
  - changing the prefix
  - changing the base name
  - changing the suffix
  - replacing the file extension name

## Installation

- Using NPM: `npm install --save-dev @fang/rename`
- Using Yarn: `yarn add --dev @fang/rename`

## Examples

- [1. Replace the extension name of your file](#1-replace-the-extension-name-of-your-file)
- [2. Replace the extension name of your file using a transform function](#2-replace-the-extension-name-of-your-file-using-a-transform-function)

### 1. Replace the extension name of your file

```javascript
// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const rename = require("@fang/rename");

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
```

Run `node script.js`, and you should see something like this in your console.

```bash
$ node script.js
fang: start
8 CPUs core(s)
1 tasks to run
Typescript: start
Typescript: 10.915ms
fang: 108.374ms
```

### 2. Replace the extension name of your file using a transform function

```javascript
// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const rename = require("@fang/rename");

const ts = {
  name: "Typescript",
  input: "example/code.ts",
  tasks: [
    rename(() => ({
      extname: ".js",
    })),
    save({
      folder: "example/dist/js",
    }),
  ],
};

const main = async () => await run([ts]);

main();
```

Run `script.js`, and you should see something like this in your console.

```bash
$ node script.js
fang: start
8 CPUs core(s)
1 tasks to run
Typescript: start
Typescript: 14.156ms
fang: 107.332ms
```
