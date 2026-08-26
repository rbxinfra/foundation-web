/** @type {import('jest').Config} */
module.exports = {
  displayName: '@rbx/foundation-ui',
  preset: '../../jest.config.base.js',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@rbx/foundation-ui$': '<rootDir>/src/index.ts',
  },
};
