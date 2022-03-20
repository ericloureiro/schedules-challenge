import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  rootDir: './',
  automock: false,
  modulePaths: ['<rootDir>'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!node_modules/',
    '!src/constants/*',
    '!src/tests/*',
    '!src/tests/factories/*',
    '!src/types/*',
    '!src/types/declarations/*',
  ],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  // Remove errors when importing these type of files on tests
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/src/tests/setup.tsx',
  },
};

export default config;
