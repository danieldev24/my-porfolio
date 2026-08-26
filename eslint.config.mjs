import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: ['error', { properties: 'never' }],
      'consistent-return': 'error',
      curly: ['error', 'all'],
      'default-case': 'error',
      'no-multi-str': 'error',
      'no-trailing-spaces': 'error',
      'no-useless-escape': 'error',
      'prefer-template': 'error',
      'react/no-multi-comp': 'error',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/static-components': 'off',
    },
  },
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
