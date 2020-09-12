import { SecretObfuscator } from './secret-obfuscator';

describe('SecretObfuscator', () => {
  it('works', () => {
    const obfuscator = new SecretObfuscator({ secrets: ['abc', 'def'] });
    expect(obfuscator.obfuscate('abc')).toBe('***');
    expect(obfuscator.obfuscate('abc def abc def')).toBe('*** *** *** ***');
    expect(obfuscator.obfuscate('1 abc 2 def 3')).toBe('1 *** 2 *** 3');
  });

  it('groups adjacent secrets together', () => {
    const obfuscator = new SecretObfuscator({
      secrets: ['abc', 'def'],
    });
    expect(obfuscator.obfuscate('abcdef')).toBe('***');
  });

  it('handles overlapping secrets', () => {
    const obfuscator = new SecretObfuscator({
      secrets: ['def', 'efg'],
    });
    expect(obfuscator.obfuscate('defg')).toBe('***');
  });

  it('handles a secret being the same as the replacement', () => {
    const obfuscator = new SecretObfuscator({
      secrets: ['abc', '***'],
      replacement: '***',
    });
    expect(obfuscator.obfuscate('abc')).toBe('***');
    expect(obfuscator.obfuscate('abc ***')).toBe('*** ***');
  });

  it('supports custom replacement', () => {
    const obfuscator = new SecretObfuscator({
      secrets: ['abc'],
      replacement: '',
    });
    expect(obfuscator.obfuscate('abcdef')).toBe('def');

    const obfuscator2 = new SecretObfuscator({
      secrets: ['abc'],
      replacement: '___',
    });
    expect(obfuscator2.obfuscate('abcdef')).toBe('___def');
  });

  it('replaces nothing for an empty secret', () => {
    const obfuscator = new SecretObfuscator({
      secrets: [''],
    });
    expect(obfuscator.obfuscate('abcdef')).toBe('abcdef');
  });

  it('works when used standalone', () => {
    const obfuscate = new SecretObfuscator({
      secrets: ['abc'],
    }).obfuscate;
    expect(obfuscate('abc')).toBe('***');
  });
});
