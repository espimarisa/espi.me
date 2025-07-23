/**
 * @file Default site metadata.
 * @license zlib
 */

// @ts-check

import process from "node:process";
import accounts from "./accounts.js";

const IS_DEVELOPMENT = process.env.NODE_ENV === "DEVELOPMENT";

export default {
	absolute_url: IS_DEVELOPMENT ? "http://localhost:8080" : "https://espi.me",
	author: {
		name: "Espi Marisa",
		twitter: accounts.twitter.username,
	},
	description:
		"Blind developer, tinkerer, and activist from Huntsville, Alabama.",
	journal: {
		email: accounts.email.username,
		subtitle: "Writings and ramblings from a broken, curious mind.",
		title: "Journal :: Espi Marisa",
	},
	theme_color: "#111111",
	title: "Espi Marisa",
	url: "https://espi.me",
};
