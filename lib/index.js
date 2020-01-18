'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rename = _interopDefault(require('rename'));

var index = (function (options) { return function (files) {
    return files.map(function (file) {
        file.path = rename(file.path, options).toString();
        return file;
    });
}; });

module.exports = index;
