import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'


export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: parser, // Ajout explicite du parseur TypeScript
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // Ajout correct de cette option
    },
    settings : {
      react: {
        version: 'detect',
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsConfigs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
