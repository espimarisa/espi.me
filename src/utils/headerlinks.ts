export interface HeaderLink {
  name: string;
  link: string;
  altText: string;
}

export const headerLinks = [
  {
    name: "GitHub",
    link: "https://github.com/espimarisa",
    altText: "A link to my GitHub profile, (at) espimarisa.",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/647269760782041133",
    altText: "A link to my Discord user profile, (at) espimarisa.",
  },
  {
    name: "Telegram",
    link: "https://t.me/espimarisa",
    altText: "A link to contact me on Telegram, (at) espimarisa.",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/espidotme",
    altText: "A link to my Twitter profile, (at) espidotme.",
  },
  {
    name: "Email",
    link: "mailto:contact@espi.me",
    altText: "A mailto link to email me at contact (at) espi (dot) me.",
  },
] satisfies HeaderLink[];
