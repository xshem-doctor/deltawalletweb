import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  globalIgnores(["dist/**", "node_modules/**"]),
]);

export default eslintConfig;
