/* eslint-disable unicorn/no-null */

module.exports = {
  root: true,

  env: {
    es6: true,
    amd: true,
    browser: true,
  },

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["unicorn", "import", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:node/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "prettier",
  ],

  rules: {
    "consistent-this": ["warn", "self"],
    "eqeqeq": ["warn", "smart"],

    "max-depth": ["warn", 8],
    "max-nested-callbacks": ["warn", 8],
    "no-array-constructor": "warn",

    "no-inline-comments": "warn",
    "spaced-comment": ["warn", "always"],

    "no-lonely-if": "warn",
    "no-new-object": "warn",
    "no-return-await": "warn",
    "no-undef": "off",
    "no-unneeded-ternary": "warn",
    "no-var": "error",

    "padded-blocks": ["warn", "never"],
    "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],
    "quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],

    "prettier/prettier": "warn",

    "node/no-unpublished-import": ["off"],
    "node/no-unsupported-features/es-syntax": ["off"],

    "node/no-missing-import": ["off"],
    "import/no-unresolved": ["off"],

    "unicorn/filename-case": ["off"],
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": "off",

    "unicorn/no-array-for-each": ["off"],
    "unicorn/consistent-function-scoping": ["off"],

    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: ["type", "internal", "parent", "sibling", "external", "builtin", "index", "object"],
      },
    ],
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],

      parser: "@typescript-eslint/parser",

      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },

      plugins: ["@typescript-eslint", "prettier"],
      extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
      rules: {
        "no-undef": "off",
        "semi": "off",

        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "no-public",
            overrides: {
              accessors: "explicit",
              methods: "explicit",
            },
          },
        ],

        // Naming convention
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "default",
            format: ["camelCase"],
          },
          {
            selector: "variableLike",
            format: ["camelCase"],
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "memberLike",
            format: ["camelCase"],
          },
          {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "require",
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: { regex: "^I[A-Z]", match: false },
          },
          {
            selector: "enumMember",
            format: ["UPPER_CASE"],
          },
          {
            selector: "objectLiteralProperty",
            format: null,
          },
          {
            selector: "typeLike",
            format: null,
          },
          {
            selector: "typeAlias",
            format: null,
          },
          {
            selector: "typeProperty",
            format: null,
          },
        ],
      },
    },
  ],
};
