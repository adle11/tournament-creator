import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4444/',
  documents: ['src/**/*.tsx', '!src/gql-std/**/*', '!src/gql-hooks/**/*'],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    './src/gql-std/': {
      preset: 'client',
      plugins: []
    }
  },
  hooks: { afterAllFileWrite: ['eslint . --ext .ts,.tsx --fix'] }
};

export default config;
