import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": "error",
      eqeqeq: ["error", "smart"],
      "no-var": "error",
      "no-unused-vars": "error",
      "prefer-const": "error",
    },
  },
  globalIgnores(["eslint.config.js"]),
]);
