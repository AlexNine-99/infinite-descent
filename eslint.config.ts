import pluginVue from 'eslint-plugin-vue'
import pluginStylistic from '@stylistic/eslint-plugin'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,
  pluginStylistic.configs['recommended'],
  {
    rules: {
      'stylistic/arrow-parens': 'error',
    },
  },
  {
    rules: {
      'vue/html-indent': ['error', 2, {
        baseIndent: 0,
      }],
      'vue/script-indent': ['error', 2, {
        baseIndent: 0,
      }],
      'vue/require-default-prop': 'off',
    },
  },

)
