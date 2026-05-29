/**
 * @file External social account data.
 * @author Espi Marisa <hi@espi.me>
 * @license Zlib
 */

type Account = {
	[k: string]: {
		url: string;
		icon: string;
		name: string;
		username: string;
	};
};

export const accounts = {
	codeberg: {
		url: "https://codeberg.org/espi",
		icon: "simple-icons:codeberg",
		name: "Codeberg",
		username: "espi",
	},
	twitter: {
		url: "https://x.com/espimarisa_",
		icon: "simple-icons:twitter",
		name: "Twitter",
		username: "espimarisa_",
	},
	fediverse: {
		url: "https://uwu.social/@espi",
		icon: "simple-icons:mastodon",
		name: "Fediverse",
		username: "@espi@uwu.social",
	},
} satisfies Account;
