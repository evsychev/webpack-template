module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    "airbnb-base",
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended'
  ],
  plugins: ["import", "unicorn", "babel"],
  rules: {
    'lit/no-legacy-template-syntax': 'off',
    'lit/no-private-properties': 'off',
    'lit/no-property-change-update': 'off',
    'lit/no-template-map': 'off',
    'lit/binding-positions': 'off',
    'lit/no-invalid-html': 'off',
    "no-console": "off",
    "no-debugger": "off",
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/test-utils/**/*.ts'] },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__muban__',
          '__MUBAN__',
          '__MUBAN_DEVTOOLS_GLOBAL_HOOK__',
          '__instance',
          '__mubanInstance',
          '_instance',
          '_container',
        ],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkShorthandImports: false,
        allowList: { fn: true },
        replacements: {
          ref: false,
          refs: false,
          params: false,
          param: false,
          props: false,
          prop: false,
        },
      },
    ],
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",

        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",

        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "import/no-unresolved": "error",
    "import/order": ["error", {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
      warnOnUnassignedImports: true,
    }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "**/*.test.ts",
          "**/*.spec.ts",
          "**/*.test.tsx",
          "**/*.spec.tsx",
          "**/test-utils/**/*.ts",
        ],
      },
    ],
    "lines-between-class-members": "off",
    "max-lines": "error",
    "no-extra-boolean-cast": "off",
    "no-plusplus": "off",
    "no-restricted-properties": [
      "error",
      { object: "window", property: "outerWidth", message: "Did you mean to use `innerWidth` ?" },
      { object: "window", property: "outerHeight", message: "Did you mean to use `innerHeight` ?" },
    ],
    "no-undef": "off", // TypeScript already handles this
    "no-underscore-dangle": "error",
    "no-unused-expressions": "off",
    "react/static-property-placement": "off",
    "unicorn/catch-error-name": "error",
    "unicorn/custom-error-definition": "off",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-exponentiation-operator": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        checkDefaultAndNamespaceImports: false,
        checkShorthandImports: false,
        replacements: {
          ref: false,
          refs: false,
          prop: false,
          props: false,
          src: false,
          param: false,
          params: false,
          args: false,
          elm: {
            element: true,
          },
        },
        allowList: {
          attr: true,
          argTypes: true,
        },
        checkProperties: true,
      },
    ],
    "unicorn/throw-new-error": "error",
    // prettier handles these
    "object-curly-newline": "off",
    "max-len": "off",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    require: true,
    process: true,
  },
  ignorePatterns: [".eslintrc.js", "*.types.test.ts"],
};
