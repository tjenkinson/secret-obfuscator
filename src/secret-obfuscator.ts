import { Ranges } from './ranges';

export type SecretObfuscatorConfig = {
  secrets: string[];
  replacement?: string;
};

export class SecretObfuscator {
  private readonly _secrets: string[];
  private readonly _replacement: string;
  constructor({ secrets, replacement = '***' }: SecretObfuscatorConfig) {
    this._secrets = secrets.filter((a) => a !== '');
    this._replacement = replacement;
    this.obfuscate = this.obfuscate.bind(this);
  }

  public obfuscate(input: string): string {
    const ranges = new Ranges();
    this._secrets.forEach((secret) => {
      const secretLength = secret.length;
      let lastIndex: number | null = null;
      while (true) {
        const startPosition = lastIndex !== null ? lastIndex + 1 : 0;
        const index = input.indexOf(secret, startPosition);
        if (index === -1) {
          break;
        }
        ranges.add({ start: index, end: index + secretLength });
        lastIndex = index;
      }
    });

    ranges.getNormalised().forEach(({ start, end }) => {
      input = `${input.substring(0, start)}${
        this._replacement
      }${input.substring(end)}`;
    });
    return input;
  }
}
