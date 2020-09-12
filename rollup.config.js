import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/secret-obfuscator.ts',
  plugins: [typescript()],
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
