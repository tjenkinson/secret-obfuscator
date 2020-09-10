import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/secret-obfuscator.ts',
  plugins: [typescript(), resolve(), commonjs()],
  onwarn: (e) => {
    throw new Error(e);
  },
  output: [
    {
      name: 'SecretObfuscator',
      file: 'dist/secret-obfuscator.js',
      format: 'umd',
    },
    {
      file: 'dist/secret-obfuscator.es.js',
      format: 'es',
    },
  ],
};
