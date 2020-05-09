import ErrorRepository from '../js/ErrorRepository.js';

test('Код ошибки есть в массиве', () => {
  const expected = 'Not Found';
  const errRep = new ErrorRepository();
  const received = errRep.translate(404);
  expect(received).toBe(expected);
});

test('Кода ошибки нет в массиве', () => {
  const expected = 'Unknown error';
  const errRep = new ErrorRepository();
  const received = errRep.translate(400);
  expect(received).toBe(expected);
});
