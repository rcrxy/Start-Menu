const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
   env: {
      browser: true,
      es2021: true,
      node: true
   },
   extends: ["plugin:vue/vue3-recommended", "plugin:prettier/recommended", "plugin:vue/essential"],
   parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser",
      sourceType: "module"
   },
   plugins: ["vue", "@typescript-eslint"],
   rules: {
      "prettier/prettier": "error",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "no-console": 0,
      "no-compare-neg-zero": 0,
      "no-duplicate-case": 0,
      "vue/max-attributes-per-line": ["error", { singleline: { max: 10 }, multiline: { max: 5 } }],
      "vue/no-multiple-template-root": 0,
      "vue/multi-word-component-names": 0,
      "vue/attribute-hyphenation": 0,
      "vue/valid-v-for": 0,
      "vue/require-v-for-key": 0,
      "vue/no-v-model-argument": 0,
      "array-element-newline": ["error", "consistent"]
   }
});
