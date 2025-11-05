/**
 * @file Project data structure.
 * @license zlib
 */

type Project = {
  description: string;
  href: string;
  name: string;
  technologies: string[];
};

export const projects = [
  {
    name: "altgo.us",
    description: "A website collecting local resources for queer Alabamians.",
    href: "https://altgo.us",
    technologies: ["Python", "HTML", "SASS", "Pelican"],
  },
  {
    name: "altrac.works",
    description: "Website for the Alabama Transgender Rights Action Coalition.",
    href: "https://altrac.works",
    technologies: ["HTML", "CSS", "Jinja"],
  },
  {
    name: "Hibiki",
    description: "A Discord bot with polished community and developer tools.",
    technologies: ["TypeScript", "Bun", "PostgreSQL", "Drizzle ORM", "Docker"],
    href: "https://github.com/espimarisa/hibiki",
  },
  {
    name: "espi.me",
    description: "My personal website, blog, and portfolio.",
    href: "https://espi.me",
    technologies: ["Astro", "SASS", "TypeScript"],
  },
  {
    name: "espinet",
    description: "Configurations and scripts taken from my homelab.",
    href: "https://github.com/espimarisa/espinet",
    technologies: ["Docker", "Bash"],
  },
  {
    name: "session-rethinkdb-ts",
    description: "A RethinkDB session store for express-session.",
    href: "https://altgo.us",
    technologies: ["TypeScript", "NodeJS", "RethinkDB", "Express"],
  },
] satisfies Project[];
