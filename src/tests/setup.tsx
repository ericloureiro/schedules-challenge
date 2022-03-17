// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  jest.setTimeout(10000);
});

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});
