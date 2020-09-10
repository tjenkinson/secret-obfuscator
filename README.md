[![npm version](https://badge.fury.io/js/%40tjenkinson%2Fsecret-obfuscator.svg)](https://badge.fury.io/js/%40tjenkinson%2Fsecret-obfuscator)

# Secret Obfuscator

## Installation

```sh
npm install --save @tjenkinson/secret-obfuscator
```

or available on JSDelivr at "https://cdn.jsdelivr.net/npm/@tjenkinson/secret-obfuscator@1".

## API

### Constructor

## Example

```ts
import { Obfuscaor } from '@tjenkinson/secret-obfuscator';

const obfuscaor = new Obfuscator({ secrets: ['a', 'ba', 'abc'] }

obfuscaor.obfuscate('This is a secret: a');
// => This is a secret: ***
obfuscaor.obfuscate('This is a secret: ba');
// => This is a secret: ***
obfuscaor.obfuscate('This is a mix of overlapping secrets: aababc');
// => This is a mix of secrets: ***
```
