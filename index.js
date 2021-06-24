module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "google"
  ],
  "globals": {
    "JSX": true,
    "React": true
  },
  "ignorePatterns": [
    "next-env.d.ts"
  ],
  "plugins": [
    "prefer-arrow"
  ],
  "rules": {
    // https://github.com/TristonJ/eslint-plugin-prefer-arrow
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": true
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        "ignoreConsecutiveComments": true
      }
    ],
    "indent": [
      "error",
      2
    ],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "semi-style": [
      "error",
      "last"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    "react/button-has-type": "error",
    //    "react/forbid-elements": 0
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "warn",
    "react/no-danger": "warn",
    "react/no-multi-comp": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "warn",
    "react/no-unstable-nested-components": [
      "error",
      {
        "allowAsProps": true
      }
    ],
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": "error",
    "react/void-dom-elements-no-children": "error",
    // JSX-specific rules
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "never"
      }
    ],
    "react/jsx-curly-newline": [
      "error",
      "consistent"
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never"
      }
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop"
    ],
    "react/jsx-fragments": [
      "error",
      "syntax"
    ],
    "react/jsx-handler-names": "warn",
    "react/jsx-max-depth": [
      "warn",
      {
        "max": 3
      }
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ]
  }
};
