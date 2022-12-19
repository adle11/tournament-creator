import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4444/',
  documents: ['src/**/*.tsx', '!src/gql-std/**/*', '!src/gql-hooks/**/*'],
  verbose: true,
  overwrite: true,
  generates: {
    'src/gql-plugin/test.txt': {
      plugins: ['myAwesomePlugin.js'],
      config: {
        option1: true,
        option2: 'yup'
      }
    }
  }
};

export default config;
