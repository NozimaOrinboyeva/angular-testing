import { DateFarmatPipe } from './date-farmat-pipe';

describe('DateFarmatPipe', () => {
    const pipe = new DateFarmatPipe();
    const testDate = new Date('2025-10-07');

    it('should return short format by defult', () => {
      expect(pipe.transform(testDate, 'short')).toBe(
        testDate.toLocaleDateString()
      );
    });

    it('should return time format', () => {
      expect(pipe.transform(testDate, 'time')).toBe(
        testDate.toLocaleTimeString()
      );
    });

    it('should return full string for unknown format', () => {
      expect(pipe.transform(testDate, 'unknown')).toBe(testDate.toString());
    });
});
