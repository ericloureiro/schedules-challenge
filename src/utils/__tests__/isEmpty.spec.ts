import isEmpty from 'src/utils/isEmpty';

describe('isEmpty', () => {
  it('return true with empty object', () => {
    expect(isEmpty({})).toEqual(true);
  });

  it('return true with empty array', () => {
    expect(isEmpty([])).toEqual(true);
  });

  it('return true with null or undefined', () => {
    expect(isEmpty(null)).toEqual(true);
    expect(isEmpty(undefined)).toEqual(true);
  });

  it('return true with empty string', () => {
    expect(isEmpty('')).toEqual(true);
  });

  it('return true with zero', () => {
    expect(isEmpty(0)).toEqual(true);
    expect(isEmpty('0')).toEqual(true);
  });

  it('return true with false', () => {
    expect(isEmpty(false)).toEqual(true);
  });

  it('return false with any value', () => {
    expect(isEmpty('a')).toEqual(false);
    expect(isEmpty(1)).toEqual(false);
    expect(isEmpty([1, 2, 3])).toEqual(false);
    expect(isEmpty({ a: 1 })).toEqual(false);
    expect(isEmpty(true)).toEqual(false);
  });
});
