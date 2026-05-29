/**
 * @file Astro content collection configuration.
 * @author Espi Marisa <hi@espi.me>
 * @license Zlib
 */

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
	loader: glob({ base: "./posts", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		published: z.coerce.date(),
		updated: z.coerce.date().optional(),
	}),
});

export const collections = { posts };
