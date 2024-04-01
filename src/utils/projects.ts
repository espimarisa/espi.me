interface Project {
  name: string;
  link: string;
  description: string;
  technologies: string;
  contributor?: boolean;
}

export const projects = [
  {
    name: "hibiki",
    link: "https://github.com/espimarisa/hibiki",
    description: "A Discord bot focused on accessible and information-rich utilities. ",
    technologies: "TypeScript, Svelte, Sveltekit, SCSS, Drizzle ORM, PostgreSQL",
  },
  {
    name: "eslint-config-ks",
    link: "https://github.com/espimarisa/eslint-config-ks",
    description: 'A strict and customizable "kitchen sink" ESLint config library.',
    technologies: "TypeScript, JavaScript, ESLint",
  },
  {
    name: "espi.me",
    link: "https://github.com/espimarisa/espi.me",
    description: "My personal website (you are here!)",
    technologies: "TypeScript, Astro, SCSS",
  },
  {
    name: "session-rethinkdb-ts",
    link: "https://github.com/espimarisa/session-rethinkdb-ts",
    description: "A modern RethinkDB session store for Express.",
    technologies: "TypeScript, Express, RethinkDB",
  },
  {
    name: "bulmaselect",
    link: "https://github.com/resolvedxd/bulmaselect",
    description: "JavaScript library for creating accessible multiselect elements.",
    technologies: "JavaScript, CSS",
    contributor: true,
  },
] satisfies Project[];
