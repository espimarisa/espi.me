/**
 * @file Webring data.
 * @author Espi Marisa
 * @license Zlib
 */

type WebringEntry = {
	[k: string]: {
		alt: string;
		button: string;
		description?: string;
		url: string | undefined;
	};
};

export const webring = {
	_espi: {
		alt: "Espi Marisa",
		url: "https://espi.me",
		button: "/images/buttons/espi.png",
	},
	altrac: {
		alt: "The Alabama Transgender Rights Action Coalition",
		url: "https://altrac.works/",
		button: "/images/buttons/altrac.png",
	},
	alula: {
		alt: "Alula",
		description: "Alula",
		url: "https://alula.me",
		button: "/images/buttons/alula.png",
	},
	erin: {
		alt: "Erin",
		url: "https://e2.pm",
		button: "/images/buttons/erin.png",
	},
	fleepy: {
		alt: "Fleepy",
		url: "https://fleepy.tv",
		button: "/images/buttons/fleepy.png",
	},
	glauca: {
		alt: "Glauca Digital",
		url: "https://glauca.digital/",
		button: "/images/buttons/glauca.gif",
	},
	hfuller: {
		alt: "Hunter Fuller",
		url: "https://pixilic.com/",
		button: "/images/buttons/hfuller.png",
	},
	maia: {
		alt: "maia",
		url: "https://maia.crimew.gay",
		button: "/images/buttons/maia.png",
	},
	megu: {
		alt: "Megu!",
		url: "https://megu.dev",
		button: "/images/buttons/megu.png",
	},
	notnite: {
		alt: "NotNite",
		url: "https://notnite.com",
		button: "/images/buttons/notnite.png",
	},
	sapphic: {
		alt: "Sapphic Angels",
		url: "https://sapphic.moe",
		button: "/images/buttons/sapphic.png",
	},
	tris: {
		alt: "Tris",
		url: "https://tris.fyi",
		button: "/images/buttons/tris.png",
	},
	winter: {
		alt: "Winter",
		url: "https://winter.cafe",
		button: "/images/buttons/winter.png",
	},
} satisfies WebringEntry;
