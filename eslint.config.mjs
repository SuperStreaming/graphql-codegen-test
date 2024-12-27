import comments from "@eslint-community/eslint-plugin-eslint-comments/configs"
import eslint from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error"
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  comments.recommended
)
