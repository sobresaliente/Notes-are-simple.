import classNames from 'shared/lib/classNames';

describe('first', () => {
  test('test', () => {
    const expectedResult = 'test a aa bb';
    expect(classNames('test', { a: true, b: false }, ['aa', 'bb'])).toBe(expectedResult);
  });
});
