/**
 * @file Webring data structure.
 * @license zlib
 */

type WebringEntry = {
  [k: string]: {
    alt: string;
    href: string | undefined;
    image: string;
  };
};

export const webring = {
  _espi: {
    alt: "Espi Marisa",
    href: "https://espi.me",
    image: "/buttons/espi.png",
  },
  adryd: {
    alt: "adryd",
    href: "https://adryd.com",
    image: "/buttons/adryd.png",
  },
  altrac: {
    alt: "The Alabama Transgender Rights Action Coalition",
    href: "https://altrac.works",
    image: "/buttons/altrac.png",
  },
  alula: {
    alt: "Alula",
    href: "https://alula.me",
    image: "/buttons/alula.png",
  },
  alyxia: {
    alt: "Alyxia",
    href: "https://alyxia.dev",
    image: "/buttons/alyxia.png",
  },
  byeoon: {
    alt: "Byeoon",
    href: "https://byeoon.dev",
    image: "/buttons/byeoon.png",
  },
  cirno: {
    alt: "HTFCirno2000",
    href: "https://cirnosystems.xyz/",
    image: "/buttons/cirno.png",
  },
  dd: {
    alt: "dd86k",
    href: "https://dd86k.space",
    image: "/buttons/dd.png",
  },
  deepy: {
    alt: "deepy (the cherryberry <3)",
    href: "https://deepy.me",
    image: "/buttons/deepy.png",
  },
  erin: {
    alt: "Erin",
    href: "https://owo.me",
    image: "/buttons/erin.png",
  },
  ezio: {
    alt: "Ezio",
    href: "https://reimu.info/",
    image: "/buttons/ezio.png",
  },
  fleepy: {
    alt: "Fleepy",
    href: "htttps://fleepy.tv",
    image: "/buttons/fleepy.png",
  },
  hfuller: {
    alt: "Hunter Fuller",
    href: "https://pixilic.com/",
    image: "/buttons/hfuller.png",
  },
  jiktim: {
    alt: "jiktim",
    href: "https://jikt.im",
    image: "/buttons/jiktim.png",
  },
  maia: {
    alt: "maia arson crimew",
    href: "https://maia.crimew.gay/",
    image: "/buttons/maia.png",
  },
  mariomasta: {
    alt: "MarioMasta64",
    href: "https://mariomasta64.me/",
    image: "/buttons/mariomasta.png",
  },
  megu: {
    alt: "Megu",
    href: "https://megu.dev",
    image: "/buttons/megu.png",
  },
  nermnelly: {
    alt: "NermNelly",
    href: "https://nerm-nelly.neocities.org/",
    image: "/buttons/nermnelly.png",
  },
  notnite: {
    alt: "NotNite",
    href: "https://notnite.com",
    image: "/buttons/notnite.png",
  },
  nta: {
    alt: "ntauthority~",
    href: "https://ntauthority.me/",
    image: "/buttons/nta.png",
  },
  nyami: {
    alt: "nyami",
    href: "https://nyam.my",
    image: "/buttons/nyami.png",
  },
  onzecki: {
    alt: "onzecki",
    href: "https://onz.ee",
    image: "/buttons/onzecki.png",
  },
  pala: {
    alt: "palaiologos",
    href: "https://palaiologos.rocks/",
    image: "/buttons/palaiologos.png",
  },
  r4dm1n: {
    alt: "R4dm1n",
    href: "https://hs.bam.moe/r4dm1n/",
    image: "/buttons/r4dm1n.png",
  },
  resolv: {
    alt: "resolv",
    href: "https://resolv.moe",
    image: "/buttons/resolv.png",
  },
  sapphic: {
    alt: "Sapphic Angels",
    href: "https://sapphic.moe",
    image: "/buttons/sapphic.png",
  },
  shuga: {
    alt: "Shuga",
    href: "https://shuga.co",
    image: "/buttons/shuga.png",
  },
  skye: {
    alt: "SkyeWeeb",
    href: "https://skyeweeb.mmm.page/",
    image: "/buttons/skye.png",
  },
  tris: {
    alt: "Tris Emily Wilson",
    href: "https://tris.fyi",
    image: "/buttons/tris.png",
  },
  trixie: {
    alt: "Trixie",
    href: "http://ponymare.ovh/",
    image: "/buttons/trixie.gif",
  },
  utsuho: {
    alt: "Utsuho Rocks",
    href: "https://utsuho.rocks",
    image: "/buttons/utsuhorocks.png",
  },
  ven: {
    alt: "Vending Machine",
    href: "https://vendicated.dev",
    image: "/buttons/ven.png",
  },
  winter: {
    alt: "Winter",
    href: "https://winter.cafe",
    image: "/buttons/winter.png",
  },
} satisfies WebringEntry;
