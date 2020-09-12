[![npm version](https://badge.fury.io/js/secret-obfuscator.svg)](https://badge.fury.io/js/secret-obfuscator)

# Secret Obfuscator

Replaces secrets in strings with "\*\*\*".

## Installation

```sh
npm install --save secret-obfuscator
```

or available on JSDelivr at "https://cdn.jsdelivr.net/npm/@tjenkinson/secret-obfuscator@1".

## Usage

```ts
import { Obfuscaor } from 'secret-obfuscator';

const obfuscator = new Obfuscator({
  secrets: ['abc', 'def', 'efg'],
  replacement: '***', // optional
});

obfuscator.obfuscate('This is a secret: abc');
// => This is a secret: ***
obfuscator.obfuscate('These are some secrets: abc def');
// => These are some secrets: *** ***
obfuscator.obfuscate('This is a mix of overlapping secrets: abcdefg');
// => This is a mix of overlapping secrets: ***
```
