"use strict";

const fs = require("fs");

module.exports = function allFilesInTree (pathItem) {
	if (fs.statSync(pathItem).isDirectory()) {
		return fs.readdirSync(pathItem)
					.map(item => allFilesInTree(`${pathItem}/${item}`))
					.reduce(((total, current) => total.concat(current)), []);
	} else {
		return [pathItem];
	}
};