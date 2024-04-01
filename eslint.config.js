import ks from "eslint-config-ks";

export default ks(
  {
    prettier: true,
    typescript: true,
    project: ["tsconfig.json"],
    astro: true,
  },
  [
    {
      files: ["**/*.astro"],
      rules: {
        "prettier/prettier": "warn",
      },
    },
  ],
);
