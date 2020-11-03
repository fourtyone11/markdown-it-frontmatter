import {terser} from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/bundle-es.js',
      format: 'es'
    },
    {
      file: 'dist/bundle-cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle-es.min.js',
      format: 'es',
      plugins: [ terser() ]
    },
    {
      file: 'dist/bundle-cjs.min.js',
      format: 'cjs',
      plugins: [ terser() ]
    }
  ],
  external: ['js-yaml', '@iarna/toml']
};
