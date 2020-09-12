export type Range = { start: number; end: number };

export class Ranges {
  private readonly _normalised: Range[] = [];

  public add(range: Range): void {
    this._normalised.push(range);
    this._normalised.sort((a, b) => a.start - b.start);

    let i = 0;
    while (i < this._normalised.length - 1) {
      const current = this._normalised[i];
      const next = this._normalised[i + 1];
      const overlapping =
        current.end >= next.start && current.start <= next.end;
      if (overlapping) {
        current.start = Math.min(next.start, current.start);
        current.end = Math.max(next.end, current.end);
        this._normalised.splice(i + 1, 1);
      } else {
        i++;
      }
    }
  }

  public getNormalised(): Range[] {
    return this._normalised;
  }
}
