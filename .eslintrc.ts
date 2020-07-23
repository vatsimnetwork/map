module.exports = {
	extends: [
		"airbnb-typescript",
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	parserOptions: {
		project: "./tsconfig.json",
	},
	rules: {
		"jsx-indent": [2, "tab"],
		"@typescript-eslint/quotes": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"no-tabs": 0,
	},
};
