/**
 * @file Configuration file for Prettier.
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 * @license zlib
 */

// @ts-check

export default {
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	experimentalTernaries: true,
	htmlWhitespaceSensitivity: "css",
	jsxSingleQuote: false,
	objectWrap: "preserve",
	overrides: [
		{
			files: ["*.njk"],
			options: {
				parser: "jinja-template",
			},
		},
	],
	plugins: ["prettier-plugin-jinja-template"],
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	semi: true,
	singleAttributePerLine: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	vueIndentScriptAndStyle: true,
};
