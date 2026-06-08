/**
 * @file Webring data.
 * @author Espi Marisa <hi@espi.me>
 * @license Zlib
 */

type WebringEntry = {
	[k: string]: {
		alt: string;
		button: string;
		url?: string;
	};
};

const imageBaseURL = "/images/buttons";

export const webring = {
	_espi: {
		alt: "Espi Marisa",
		url: "https://espi.me",
		button: `${imageBaseURL}/espi.png`,
	},
	adryd: {
		alt: "adryd",
		url: "https://adryd.com",
		button: `${imageBaseURL}/adryd.png`,
	},
	altrac: {
		alt: "The Alabama Transgender Rights Action Coalition",
		url: "https://altrac.works/",
		button: `${imageBaseURL}/altrac.png`,
	},
	alula: {
		alt: "Alula",
		url: "https://alula.me",
		button: `${imageBaseURL}/alula.png`,
	},
	alyxia: {
		alt: "Alyxia",
		url: "https://alyxia.dev/",
		button: `${imageBaseURL}/alyxia.png`,
	},
	byeoon: {
		alt: "Byeoon",
		url: "https://byeoon.dev/",
		button: `${imageBaseURL}/byeoon.gif`,
	},
	cherry: {
		alt: "Cherry",
		button: `${imageBaseURL}/cherry.png`,
		url: "https://pawing.party",
	},
	cirno: {
		alt: "Cirno",
		url: "http://cirnosystems.xyz/",
		button: `${imageBaseURL}/cirno.png`,
	},
	dd: {
		alt: "dd86k",
		url: "https://dd86k.space/",
		button: `${imageBaseURL}/dd.png`,
	},
	eightyeightthirtyone: {
		alt: "Eighty Eight Thirty One",
		button: `${imageBaseURL}/eightyeightthirtyone.png`,
		url: "https://eightyeightthirty.one/",
	},
	elixire: {
		alt: "elixi.re",
		button: `${imageBaseURL}/elixire.gif`,
		url: "https://elixi.re",
	},
	emilia: {
		alt: "Emilia",
		url: "https://emilia.tf/",
		button: `${imageBaseURL}/emilia.gif`,
	},
	erin: {
		alt: "Erin",
		url: "https://e2.pm",
		button: `${imageBaseURL}/erin.png`,
	},
	fleepy: {
		alt: "Fleepy",
		url: "https://fleepy.tv",
		button: `${imageBaseURL}/fleepy.png`,
	},
	glauca: {
		alt: "Glauca Digital",
		url: "https://glauca.digital/",
		button: `${imageBaseURL}/glauca.gif`,
	},
	hfuller: {
		alt: "Hunter Fuller",
		url: "https://pixilic.com/",
		button: `${imageBaseURL}/hfuller.png`,
	},
	jiktim: {
		alt: "jiktim",
		button: `${imageBaseURL}/jiktim.png`,
		url: "https://jikt.im",
	},
	luna: {
		alt: "luna",
		button: `${imageBaseURL}/luna.gif`,
		url: "https://l4.pm/",
	},
	maia: {
		alt: "maia",
		url: "https://maia.crimew.gay",
		button: `${imageBaseURL}/maia.png`,
	},
	mariomasta: {
		alt: "MarioMasta64",
		button: `${imageBaseURL}/mariomasta.png`,
		url: "https://mariomasta64.me/",
	},
	mary: {
		alt: "Mary",
		button: `${imageBaseURL}/mary.png`,
		url: "https://coolmathgames.tech",
	},
	megu: {
		alt: "Megu!",
		url: "https://megu.dev",
		button: `${imageBaseURL}/megu.png`,
	},
	nat: {
		alt: "Natalie",
		url: "https://nyatalie.fyi",
		button: `${imageBaseURL}/nat.png`,
	},
	nermnelly: {
		alt: "NermNelly",
		url: "https://nermnelly.nekoweb.org/",
		button: `${imageBaseURL}/nermnelly.png`,
	},
	notnite: {
		alt: "NotNite",
		url: "https://notnite.com",
		button: `${imageBaseURL}/notnite.png`,
	},
	onzecki: {
		alt: "onzecki",
		button: `${imageBaseURL}/onzecki.png`,
		url: "https://onz.ee",
	},
	pihnea: {
		alt: "pihnea",
		button: `${imageBaseURL}/pihnea.png`,
		url: "https://pihnea.ovh",
	},
	r4dm1n: {
		alt: "r4dm1n",
		url: "https://r4dm1n.catgirlpatchouli.online/",
		button: `${imageBaseURL}/r4dm1n.png`,
	},
	resolv: {
		alt: "resolv",
		button: `${imageBaseURL}/resolv.png`,
		url: "https://resolv.moe",
	},
	rez: {
		alt: "Rez",
		url: "https://rez.bio/",
		button: `${imageBaseURL}/rez.png`,
	},
	sapphic: {
		alt: "Sapphic Angels",
		url: "https://sapphic.moe",
		button: `${imageBaseURL}/sapphic.png`,
	},
	shuga: {
		alt: "Shuga",
		url: "https://shuga.co",
		button: `${imageBaseURL}/shuga.png`,
	},
	skye: {
		alt: "Skye",
		button: `${imageBaseURL}/skye.png`,
		url: "https://skyeweeb.mmm.page/",
	},
	tris: {
		alt: "Tris",
		url: "https://tris.fyi",
		button: `${imageBaseURL}/tris.png`,
	},
	vendingmachine: {
		alt: "Ven",
		url: "https://vendicated.dev",
		button: `${imageBaseURL}/vendingmachine.gif`,
	},
	winter: {
		alt: "Winter",
		url: "https://winter.cafe",
		button: `${imageBaseURL}/winter.png`,
	},
} satisfies WebringEntry;
