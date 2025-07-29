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
      // Disable 'any' type errors
      "@typescript-eslint/no-explicit-any": "off",

      // Disable React hooks rules
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",

      // Disable prefer-const rule
      "prefer-const": "off",

      // Disable unused variables warning
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
