/**
 * @file External social account data.
 * @author Espi Marisa <hi@espi.me>
 * @license Zlib
 */

export type Account = {
	[k: string]: {
		description: string | undefined;
		name: string;
		url: string;
		username: string;
		visible: boolean;
	};
};

// List of social media (and Git I guess?) accounts.
export const socials = {
	bluesky: {
		description: undefined,
		visible: true,
		url: "https://bsky.app/profile/espi.me",
		name: "Bluesky",
		username: "espi.me",
	},
	codeberg: {
		description: undefined,
		visible: true,
		url: "https://codeberg.org/espi",
		name: "Codeberg",
		username: "espi",
	},
	fediverse: {
		description: undefined,
		visible: true,
		url: "https://uwu.social/@espi",
		name: "Fediverse",
		username: "@espi@uwu.social",
	},
	github: {
		visible: true,
		url: "https://github.com/espimarisa",
		name: "GitHub",
		username: "espimarisa",
		description: "Mostly mirrors from Codeberg.",
	},
	twitter: {
		description: "I don't use Twitter much and neither should you.",
		name: "Twitter",
		url: "https://x.com/espimarisa_",
		username: "espimarisa_",
		visible: true,
	},
} satisfies Account;

// List of contact methods.
export const contactMethods = {
	discord: {
		visible: true,
		url: "https://discord.com/",
		name: "Discord",
		username: "espimarisa",
		description: "If this link doesn't work, my username is espimarisa.",
	},
	email: {
		description: undefined,
		visible: true,
		url: "mailto:hi@espi.me",
		name: "Email",
		username: "hi@espi.me",
	},
	matrix: {
		description: undefined,
		visible: true,
		url: "",
		name: "Matrix",
		username: "@espi:chat.blahaj.zone",
	},
	signal: {
		description: undefined,
		visible: true,
		url: "",
		name: "Signal",
		username: "espimarisa.01",
	},
	telegram: {
		description: undefined,
		visible: true,
		url: "https://t.me/espimarisa",
		name: "Telegram",
		username: "espimarisa",
	},
	xmpp: {
		description: undefined,
		visible: true,
		url: "xmpp://espi@a3.pm",
		name: "XMPP",
		username: "espi@a3.pm",
	},
};
