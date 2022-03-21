import { Empty, ObjectOfAny } from 'src/types/utils';

const isEmpty = (value: unknown): value is Empty => {
  if (value == null) {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === 'object' && Object.keys(value as ObjectOfAny).length === 0) {
    return true;
  }

  if (value === '' || value === 0 || value === '0' || value === false) {
    return true;
  }

  return false;
};

export default isEmpty;
