import { pipe } from 'rxjs';
import { ReversePipe } from './reverse-pipe';

describe('ReversePipe', () => {
  const pipe = new ReversePipe();
  
it('should reverse a string', () => {
  expect(pipe.transform('Nozi')).toBe('izoN');
});

it('should return empty string string if input is empty', () => {
  expect(pipe.transform('')).toBe('');
});
});

