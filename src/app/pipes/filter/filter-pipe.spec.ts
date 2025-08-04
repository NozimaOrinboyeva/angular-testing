import { FilterPipe } from './filter-pipe';

describe('FilterPipe', () => {
    const pipe = new FilterPipe();
    const list = ['Angular', 'React', 'Vue'];

    it('should return all items if searchText is empty', () => {
      expect(pipe.transform(list, '')).toEqual(list);
    });

    it('should filter matching items', () => {
      expect(pipe.transform(list, 'an')).toEqual(['Angular']);
    });
     
    it('should be case insensitive', () => {
      expect(pipe.transform(list,'REACT')).toEqual(['React']);
    });
});
