import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Prevent unescaped entities in JSX
      "react/no-unescaped-entities": "error",

      // Prevent using <a> tags for internal navigation
      "@next/next/no-html-link-for-pages": "error",

      // Additional helpful rules to prevent common mistakes
      "react/jsx-no-target-blank": "error", // Prevent security issues with target="_blank"
      "react/jsx-key": "error", // Require keys in lists
      "react/no-array-index-key": "warn", // Warn about using array index as key
      "react/jsx-no-duplicate-props": "error", // Prevent duplicate props
      "react/jsx-no-undef": "off", // Temporarily disable - causing false positives
      "react/no-children-prop": "error", // Prevent using children as prop
      "react/no-danger-with-children": "error", // Prevent dangerous children usage
      "react/no-deprecated": "error", // Prevent deprecated React features
      "react/no-direct-mutation-state": "error", // Prevent direct state mutation
      "react/no-find-dom-node": "error", // Prevent findDOMNode usage
      "react/no-is-mounted": "error", // Prevent isMounted usage
      "react/no-render-return-value": "error", // Prevent render return value usage
      "react/no-string-refs": "error", // Prevent string refs
      "react/no-unescaped-entities": "error", // Prevent unescaped entities
      "react/no-unknown-property": "off", // Temporarily disable - causing false positives
      "react/no-unsafe": "error", // Prevent unsafe lifecycle methods
      "react/require-render-return": "error", // Require render to return something
      "react/self-closing-comp": "error", // Require self-closing components
      "react/jsx-boolean-value": ["error", "never"], // Require boolean props without value
      "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }], // Prevent unnecessary braces
      "react/jsx-fragments": ["error", "syntax"], // Require fragment syntax
      "react/jsx-no-useless-fragment": "error", // Prevent useless fragments
      "react/jsx-pascal-case": "error", // Require PascalCase for components
      "react/jsx-sort-props": "off", // Disable prop sorting (can be too strict)
      "react/jsx-uses-react": "off", // Temporarily disable - causing false positives
      "react/jsx-uses-vars": "off", // Temporarily disable - causing false positives
      "@typescript-eslint/no-explicit-any": "off", // Allow any type
      "@typescript-eslint/no-unsafe-assignment": "off", // Allow unsafe assignments
      "@typescript-eslint/no-unsafe-member-access": "off", // Allow unsafe member access
      "@typescript-eslint/no-unsafe-call": "off", // Allow unsafe calls
      "@typescript-eslint/no-unsafe-return": "off", // Allow unsafe returns
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
    ],
  },
];

export default eslintConfig;
