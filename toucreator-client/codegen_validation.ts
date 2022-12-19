import type { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   schema: 'http://localhost:4444/',
//   documents: 'src/graphql/**/*.graphql',
//   generates: {
//     'src/graphql/types.generated.ts': { plugins: ['typescript'] },
//     'src/graphql/': {
//       preset: 'near-operation-file',
//       presetConfig: {
//         extension: '.generated.tsx',
//         baseTypesPath: 'types.generated.ts'
//       },
//       plugins: ['typescript-operations', 'typescript-react-apollo']
//     }
//   }
// };

// const config: CodegenConfig = {
//   schema: 'http://localhost:4444/',
//   documents: ['src/**/*.tsx', '!src/gql/**/*'],
//   ignoreNoDocuments: true,
//   generates: {
//     './src/gql/': {
//       preset: 'client',
//       config: {
//         overwrite: true
//       },
//       plugins: [],
//       presetConfig: {
//         fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
//       }
//     }
//   }
// };

// const config: CodegenConfig = {
//   schema: 'http://localhost:4444/',
//   generates: {
//     'src/graphql/validationSchema.ts': {
//       plugins: ['typescript', 'typescript-validation-schema'],
//       config: {
//         strictScalars: true,
//         schema: 'yup'
//       }
//     }
//   }
// };

const config: CodegenConfig = {
  schema: 'http://localhost:4444/',
  documents: ['src/**/*.tsx', '!src/gql/**/*'],
  verbose: true,
  overwrite: true,
  generates: {
    'src/graphql/test.ts': {
      plugins: ['myAwesomePlugin.js'],
      config: {
        strictScalars: true,
        schema: 'yup'
      }
    }
  }
};

export default config;
