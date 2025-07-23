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
			/**
			 * Enables support for nunjucks and ninja-like files.
			 * Add prettier-plugin-jinja-template to plugins after installing it.
			 * @see https://saneef.com/blog/format-nunjucks-files-with-prettier/
			 */

			files: ["**/*.njk"],
			options: {
				parser: "jinja-template",
			},
		},
		{
			/**
			 * Prettier puts trailing commas on jsonc files by default.
			 * This is *technically* allowed, but many parsers do not allow it.
			 * @see https://github.com/prettier/prettier/issues/15956
			 */

			files: ["**/*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
	],
	plugins: ["prettier-plugin-jinja-template"],
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "consistent",
	semi: true,
	singleAttributePerLine: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	vueIndentScriptAndStyle: true,
};
