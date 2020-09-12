import { Ranges } from './ranges';

describe('Ranges', () => {
  let ranges: Ranges;
  beforeEach(() => (ranges = new Ranges()));

  it('works', () => {
    expect(ranges.getNormalised()).toEqual([]);

    ranges.add({ start: 0, end: 1 });
    expect(ranges.getNormalised()).toEqual([{ start: 0, end: 1 }]);

    ranges.add({ start: 4, end: 6 });
    expect(ranges.getNormalised()).toEqual([
      { start: 0, end: 1 },
      { start: 4, end: 6 },
    ]);

    ranges.add({ start: 2, end: 3 });
    expect(ranges.getNormalised()).toEqual([
      { start: 0, end: 1 },
      { start: 2, end: 3 },
      { start: 4, end: 6 },
    ]);

    ranges.add({ start: 2, end: 4 });
    expect(ranges.getNormalised()).toEqual([
      { start: 0, end: 1 },
      { start: 2, end: 6 },
    ]);

    ranges.add({ start: 0, end: 7 });
    expect(ranges.getNormalised()).toEqual([{ start: 0, end: 7 }]);
  });
});
