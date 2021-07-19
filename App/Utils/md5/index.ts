import md5 from 'md5';
import memoizeOne from 'memoize-one';

export const createHash = memoizeOne(key => {
  return md5(key);
});
