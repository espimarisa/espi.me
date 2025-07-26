/**
 * @file Default site data.
 * @license zlib
 */

// @ts-check

import process from "node:process";
import accounts from "./accounts.js";

const IS_DEVELOPMENT = process.env.NODE_ENV === "DEVELOPMENT";

export default {
	author: {
		name: "Espi Marisa",
		twitter: accounts.twitter.username,
	},
	description:
		"Blind developer, tinkerer, and activist from Huntsville, Alabama.",
	journal: {
		email: accounts.email.username,
		subtitle: "Espi's Journal",
		title: "Espi's Journal",
	},
	keywords: "Espi, Espi Marisa, espimarisa, Marisa Espi",
	theme_color: "#111111",
	title: "Espi Marisa",
	url: IS_DEVELOPMENT ? "http://localhost:8080" : "https://espi.me",
};
