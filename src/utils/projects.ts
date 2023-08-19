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
    description: "A Discord bot jam-packed with useful utilities for everyone.",
    technologies: "TypeScript, React, Next.js, SCSS, Prisma, PostgreSQL",
  },
  {
    name: "espi.me",
    link: "https://github.com/espimarisa/espi.me",
    description: "My personal website and project portfolio.",
    technologies: "TypeScript, Astro, SCSS",
  },
  {
    name: "session-rethinkdb-ts",
    link: "https://github.com/espimarisa/session-rethinkdb-ts",
    description: "A RethinkDB express-session store.",
    technologies: "TypeScript, RethinkDB",
  },
  {
    name: "bulmaselect",
    link: "https://github.com/resolvedxd/bulmaselect",
    description: "JavaScript library for creating accessible multiselect elements.",
    technologies: "JavaScript, CSS",
    contributor: true,
  },
] satisfies Project[];
