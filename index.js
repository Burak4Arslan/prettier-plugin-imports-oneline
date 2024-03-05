const { hasNewline } = require("prettier").util;

function importsOneline(text, options) {
	if (hasNewline(text)) {
		const lines = text.split(/\r?\n/);
		const imports = [];
		let otherCode = [];
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			if (line.startsWith("import")) {
				imports.push(line);
			} else {
				otherCode = lines.slice(i);
				break;
			}
		}
		if (imports.length > 0) {
			return [...imports, "", ...otherCode].join("\n");
		}
	}
	return text;
}

module.exports = {
	printers: {
		importsOneline,
	},
};
