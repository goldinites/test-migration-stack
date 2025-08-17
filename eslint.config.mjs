import prettierPlugin from 'eslint-plugin-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrorsIgnorePattern: '_' }],
    },
  }
);
