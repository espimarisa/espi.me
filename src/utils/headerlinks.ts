export interface HeaderLink {
  name: string;
  link: string;
  altText: string;
  username: string;
}

export const headerLinks = [
  {
    name: "GitHub",
    link: "https://github.com/espimarisa",
    altText: "A link to my GitHub profile, (at) espimarisa.",
    username: "@espimarisa",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/647269760782041133",
    altText: "A link to my Discord user profile, (at) espimarisa.",
    username: "@espimarisa",
  },
  {
    name: "Telegram",
    link: "https://t.me/espimarisa",
    altText: "A link to contact me on Telegram, (at) espimarisa.",
    username: "@espimarisa",
  },
  {
    name: "Keybase",
    link: "https://keybase.io/espimarisa",
    altText: "A link to my Keybase profile, (at) espimarisa.",
    username: "@espimarisa",
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/espimarisa",
    altText: "A link to my Steam profile, (at) espimarisa.",
    username: "@espimarisa",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/espidotme",
    altText: "A link to my Twitter profile, (at) espidotme.",
    username: "@espidotme",
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/espi.me",
    altText: "A link to my Bluesky profile, (at) espi (dot) me.",
    username: "@espi.me",
  },
  {
    name: "Signal",
    link: "https://signal.me/#eu/0rRdxJjNEyP9MRGqdRo7p0iiMR2dO0tsTKMskW2/YeO5aBb5FVpOKKCBDcfwIfhN",
    altText: "A link to message me on Signal, (at) espimarisa (dot) 01.",
    username: "@espimarisa.01",
  },
  {
    name: "Email",
    link: "mailto:contact@espi.me",
    altText: "A mailto link to email me at contact (at) espi (dot) me.",
    username: "contact@espi.me",
  },
  {
    name: "PGP",
    link: "/pubkey.asc",
    altText: "A link to my public key, espi (dot) me (slash) pubkey (dot) asc.",
    username: "espi.me/pubkey.asc",
  },
] satisfies HeaderLink[];
