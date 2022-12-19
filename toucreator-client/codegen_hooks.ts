import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4444/',
  documents: 'src/gql-hooks/**/*.graphql',
  generates: {
    'src/gql-hooks/types.generated.ts': { plugins: ['typescript'] },
    'src/gql-hooks/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types.generated.ts'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo']
    }
  }
};

export default config;
