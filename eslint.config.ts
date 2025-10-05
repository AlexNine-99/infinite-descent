import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js }, extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json }, language: 'json/jsonc', extends: ['json/recommended']
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended']
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended']
  },
  {
    plugins: {
      'vue': pluginVue,
      '@stylistic': stylistic
    },
    rules: {
      'vue/html-indent': ['warn', 2, {
        baseIndent: 0
      }],
      'vue/max-attributes-per-line': ['warn', {
        singleline: {
          max: 10
        },
        multiline: {
          max: 1
        }
      }],
      '@stylistic/max-len': ['warn', {
        code: 80
      }],
      '@stylistic/semi': ['warn', 'never'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/no-confusing-arrow': ['warn'],
      '@stylistic/indent': ['warn', 2, {

      }],
      'brace-style': ['warn', '1tbs', {
        allowSingleLine: false
      }],
      'curly': ['warn', 'all']
    }
  }
])
