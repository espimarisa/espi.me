/**
 * @file Web account structure.
 * @license zlib
 */

type Account = {
  [k: string]: {
    href: string;
    icon: string;
    platform: string;
    username: string;
  };
};

export const accounts = {
  github: {
    href: "https://github.com/espimarisa",
    icon: "simple-icons:github",
    platform: "GitHub",
    username: "espimarisa",
  },
  x: {
    href: "https://x.com/espimarisa_",
    icon: "simple-icons:x",
    platform: "X",
    username: "espimarisa_",
  },
  bluesky: {
    href: "https://bsky.app/profile/did:plc:tuihqhadazqooxe5fhw6dhzk",
    icon: "simple-icons:bluesky",
    platform: "Bluesky",
    username: "espi.me",
  },
  discord: {
    href: "https://discord.com/users/647269760782041133",
    icon: "simple-icons:discord",
    platform: "Discord",
    username: "espimarisa",
  },
  telegram: {
    href: "https://t.me/espimarisa",
    icon: "simple-icons:telegram",
    platform: "Telegram",
    username: "espimarisa",
  },
  signal: {
    href: "https://signal.me/#eu/0rRdxJjNEyP9MRGqdRo7p0iiMR2dO0tsTKMskW2_YeO5aBb5FVpOKKCBDcfwIfhN",
    icon: "simple-icons:signal",
    platform: "Signal",
    username: "espimarisa.01",
  },
  xmpp: {
    href: "xmpp:espi@a3.pm",
    icon: "simple-icons:xmpp",
    platform: "XMPP",
    username: "espi@a3.pm",
  },
  email: {
    href: "mailto:hi@espi.me?subject=espi.me",
    icon: "simple-icons:mailgun",
    platform: "Email",
    username: "hi@espi.me",
  },
} satisfies Account;
