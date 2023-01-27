import Validator from '../validator';

const v = new Validator();

test('only latin script letters, numbers, dashes, and underscores', () => {
  expect(v.validateUsername('asd-23_asd')).toBe(true);
});

test('no three numbers in a row', () => {
  expect(v.validateUsername('asd-123_asd')).toBe(false);
});

test('start with only latin script letters', () => {
  expect(v.validateUsername('2asd-23_asd')).toBe(false);
});

test('end with only latin script letters', () => {
  expect(v.validateUsername('asd-23_asd4')).toBe(false);
});
